import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useRef } from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { Button } from './shared/Button';
import { RemoteImage } from './shared/RemoteImage';

// 네비게이션 파라미터 타입 정의
type RootStackParamList = {
  ImageDetail: { url: string };
};

// 네비게이션 타입 정의
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ImageDetail'
>;

export const PhotoListItem = ({ url }: { url: string }) => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp>();

  const animationValue = useRef(new Animated.Value(0)).current;

  const onPress = useCallback(() => {
    navigate('ImageDetail', { url });
  }, [url]);

  const onPressIn = () => {
    Animated.timing(animationValue, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true // 이 부분을 추가
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animationValue, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true // 이 부분을 추가
    }).start();
  };

  const scale = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95]
  });

  return (
    <Button
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <RemoteImage uri={url} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </Button>
  );
};
