import React from 'react';
import {View} from 'react-native';
import styles from './Style';

interface StepperProps {
  num: number;
  customStyle?: any;
}

const Stepper: React.FC<StepperProps> = ({num, customStyle}) => {
  return (
    <View
      style={[
        styles.mainContainer, // Remove the extra curly braces here
        customStyle,
      ]}>
      <View style={styles.borderColor(num)} />
      <View style={styles.borderColor1(num)} />
      <View style={styles.borderColor2(num)} />
      <View style={styles.borderColor3(num)} />
      <View style={styles.borderColor4(num)} />
      <View style={styles.borderColor5(num)} />
      <View style={styles.borderColor6(num)} />
      <View style={styles.borderColor7(num)} />
      <View style={styles.borderColor8(num)} />
      <View style={styles.borderColor9(num)} />
      <View style={styles.borderColor10(num)} />

      <View style={styles.borderColor11(num)} />
    </View>
  );
};

export default Stepper;
