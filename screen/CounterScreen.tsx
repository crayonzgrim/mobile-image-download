import { Button } from '@/components/shared/Button';
import { Header } from '@/components/shared/Header/Header';
import { Icon } from '@/components/shared/Icon';
import { Spacer } from '@/components/shared/Spacer';
import { Typography } from '@/components/shared/Typography';
import { useState } from 'react';
import { View } from 'react-native';

export const CounterScreen = () => {
  const [value, setValue] = useState(0);

  const onPressMinus = () => {
    setValue((prev) => prev - 1);
  };

  const onPressPlus = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="Counter" />
      </Header>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button
            paddingHorizontal={4}
            paddingVertical={4}
            onPress={onPressMinus}
          >
            <Icon name="remove" size={20} color="black" />
          </Button>

          <Spacer horizontal space={20} />

          <Typography fontSize={20}>{value}개</Typography>

          <Spacer horizontal space={20} />

          <Button
            paddingHorizontal={4}
            paddingVertical={4}
            onPress={onPressPlus}
          >
            <Icon name="add" size={20} color="black" />
          </Button>
        </View>
      </View>
    </View>
  );
};
