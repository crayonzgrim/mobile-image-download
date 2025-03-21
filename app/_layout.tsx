import { RootStackNavigation } from '@/navigations/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

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

  return (
    <NavigationContainer>
      {/* <Root /> */}

      {/* <BottomTabNavigation /> */}
      <RootStackNavigation />
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
