import { PhotoListItem } from '@/components/PhotoListItem';
import { Header } from '@/components/shared/Header/Header';
import { IMAGE_LIST } from '@/constant/images';
import { FlatList, View } from 'react-native';

export const ImageListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={IMAGE_LIST}
        renderItem={({ item }) => <PhotoListItem url={item} />}
      />
    </View>
  );
};
