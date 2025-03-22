import { RootStackNavigation } from '@/navigations/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // return (
  //   <SafeAreaProvider>
  //     <Provider store={store}>
  //       <CounterScreen />
  //     </Provider>
  //   </SafeAreaProvider>
  // );
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStackNavigation />
      </Provider>
    </NavigationContainer>
  );

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <NavigationContainer>
  //         <Root />
  //
  //         <BottomTabNavigation />
  //       </NavigationContainer>
  //     </SafeAreaView>
  //     {/* <StatusBar style="auto" /> */}
  //   </SafeAreaProvider>
  // );
}
