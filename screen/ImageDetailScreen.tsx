import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { RemoteImage } from '@/components/shared/RemoteImage';
import { Typography } from '@/components/shared/Typography';
import { onClickFavorite } from '@/redux/actions/favorite';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';
import { ActivityIndicator, useWindowDimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// 네비게이션 파라미터 타입 정의
type RootStackParamList = {
  ImageDetail: { url: string };
  // 다른 스크린들도 필요하다면 여기에 추가
};

export const ImageDetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ImageDetail'>>();
  const { width } = useWindowDimensions();

  const { goBack } = useNavigation();

  const [downloading, setDownloading] = useState(false);

  const dispatch = useDispatch();

  const isFavorite = useSelector((state: any) => {
    return (
      state.favorite.favoriteList.filter((item: any) => item === params.url)
        .length > 0
    );
  });

  const onPressFavorite = () => {
    dispatch(onClickFavorite(params.url));
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressDownload = async () => {
    setDownloading(true);

    const downloadResumable = FileSystem.createDownloadResumable(
      params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const permission = await MediaLibrary.getPermissionsAsync(true);
      console.log('permission >> ', permission);

      if (permission.status === 'undetermined') {
        const requestResult = await MediaLibrary.requestPermissionsAsync();

        if (requestResult.status === 'denied') return;
      }

      if (permission.status === 'denied') return;

      const downloadResult = await downloadResumable.downloadAsync();
      if (downloadResult) {
        console.log('Successed Download!!', downloadResult.uri);

        const asset = await MediaLibrary.createAssetAsync(downloadResult.uri);
        const album = MediaLibrary.createAlbumAsync(
          'MyFirstAlbum',
          asset,
          false
        );

        console.log('album >> ', album);
      }
    } catch (err) {
    } finally {
      setDownloading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon name={'arrow-back'} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>

        <Header.Icon
          name={isFavorite ? 'heart' : 'heart-outline'}
          onPress={onPressFavorite}
        />
      </Header>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RemoteImage uri={params?.url} width={width} height={width * 1.5} />
      </View>

      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: 'black' }}>
          {downloading ? (
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ActivityIndicator size="small" color="white" />
            </View>
          ) : (
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography color={'white'}>DOWNLOAD</Typography>
              <Icon name="download" color="white" size={24} />
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};
