import { Button as RNButton, Text, View } from 'react-native';
import { Badge } from './shared/Badge';
import { Button } from './shared/Button';
import { Divider } from './shared/Divider';
import { Icon } from './shared/Icon';
import { LocalImage } from './shared/LocalImage';
import { RemoteImage } from './shared/RemoteImage';
import { Spacer } from './shared/Spacer';
import { TabIcon } from './shared/TabIcon';
import { Typography } from './shared/Typography';

export default function AddDiary() {
  const onPressBack = () => {
    console.log('Going back');
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>AddDieary</Text>

        <Typography color={'red'} fontSize={20}>
          Hello world
          <Typography color={'blue'} fontSize={30}>
            Hello world2
          </Typography>
        </Typography>
      </View>

      <Spacer space={20} />
      <Divider />
      <Spacer space={20} />

      <LocalImage
        source={require('../assets/images/favicon.png')}
        width={100}
        height={100}
        style={{ border: '2px dashed red' }}
      />

      <Spacer space={20} />

      <RemoteImage
        uri={
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        }
        width={300}
        height={100}
        style={{ border: '2px dashed blue' }}
      />

      <Badge fontSize={10} color={'white'} badgeText={'N'} badgeBgColor="blue">
        <Icon name="home" size={40} color={'pink'} />
      </Badge>

      <Badge fontSize={10} color={'white'} badgeText={'Y'}>
        <Typography>Hello world</Typography>
      </Badge>

      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => {
            console.log('Pressed');
          }}
        >
          <Typography>CLICK!</Typography>
        </Button>
      </View>

      <TabIcon icon="home" />
      <TabIcon icon="home" isVisible={false} />

      <RNButton onPress={onPressBack} title="Back" />
    </View>
  );
}
