import React from 'react';
import styles from './style';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Stepper from '../stepper/Stepper';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface HeaderProps {
  onPressArrow?: () => void;
  customMainContainerStyle?: any;
  num: number;
}

const Header: React.FC<HeaderProps> = ({
  onPressArrow = () => null,
  customMainContainerStyle,
  num,
}) => {
  return (
    <>
      <View style={{flex: 0.1, justifyContent: 'flex-end'}}>
        <View style={[styles.mainContainer, customMainContainerStyle]}>
          <TouchableOpacity
            disabled={num == 1 ? true : false}
            onPress={() => onPressArrow()}>
            <Icon name="chevron-left" size={24} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.headerInfoText}>{'Basic Info'}</Text>
          <TouchableOpacity>
            <Text style={styles.headerSkipText}>SKIP</Text>
          </TouchableOpacity>
        </View>
        <Stepper customStyle={{margin: moderateScale(10)}} num={num} />
      </View>
    </>
  );
};

export default Header;
