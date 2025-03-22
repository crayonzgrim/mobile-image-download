import { PhotoListItem } from '@/components/PhotoListItem';
import { Header } from '@/components/shared/Header/Header';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoriteImageListScreen = () => {
  const imageList = useSelector(
    (state: any) => state?.favorite?.favoriteList ?? []
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header>
        <Header.Title title="FAVORITE" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={imageList}
        renderItem={({ item }) => <PhotoListItem url={item} />}
      />
    </View>
  );
};
