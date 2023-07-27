import React from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  backgroundColor?: string;
  onPress: () => void;
  customButtonStyle?: StyleProp<ViewStyle>;
  disable: boolean;
}

const CircularButton: React.FC<Props> = ({
  backgroundColor = 'lightgrey',
  onPress,
  customButtonStyle,
  disable,
}) => {
  return (
    <View
      style={[
        {
          alignItems: 'flex-end',
          width: '90%',
          flex: 0.15,
        },
        customButtonStyle,
      ]}>
      <TouchableOpacity
        disabled={disable}
        style={{
          width: 50,
          height: 50,
          backgroundColor: backgroundColor,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Icon name="corner-down-right" size={26} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default CircularButton;
