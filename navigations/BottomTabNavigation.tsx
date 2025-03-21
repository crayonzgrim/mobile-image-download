import { TabIcon } from '@/components/shared/TabIcon';
import { FavoriteImageListScreen } from '@/screen/FavoriteImageListScreen';
import { ImageListScreen } from '@/screen/ImageListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const getIcon = () => {
            switch (route.name) {
              case 'ImageList':
                return 'home';
              case 'FavoriteImageList':
                return 'star';
              default:
                return 'home';
            }
          };

          const icon = getIcon();

          return (
            <TabIcon
              icon={icon}
              isVisible={focused}
              color={color}
              // color={focused ? 'tomato' : 'gray'}
            />
          );
        }
      })}
    >
      <Tabs.Screen name={'ImageList'} component={ImageListScreen} />
      <Tabs.Screen
        name={'FavoriteImageList'}
        component={FavoriteImageListScreen}
      />
    </Tabs.Navigator>
  );
};
