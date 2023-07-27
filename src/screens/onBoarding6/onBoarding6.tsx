import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Slider2 from 'react-native-slider';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import Colors from '../../utlis/colors/Colors';
import Header from '../../components/header/Header';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

export const OnBoarding6: React.FC<Props> = ({navigation}) => {
  const [slideVal, setSlideVal] = useState<number>(1.04);
  let arr = slideVal.toString().split('');
  let firstDigit = arr.splice(0, 1).join('');
  let secondDigit = arr.slice(2, 4).join('');

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressArrow={() => navigation.goBack()} num={6} />
        <View style={styles.contentContainer}>
          <Text
            style={
              styles.headingText
            }>{`What's would your \nideal maximum \ncommute time be`}</Text>
          <View style={styles.slideContent}>
            {slideVal < 1 ? (
              <Text style={styles.slideValue}>{`${(
                Math.round(slideVal * 100) / 100
              ).toFixed(2)}m`}</Text>
            ) : (
              <Text
                style={
                  styles.slideValue
                }>{`${firstDigit}h${secondDigit}`}</Text>
            )}
            <Slider2
              value={slideVal}
              maximumValue={3}
              onValueChange={val => setSlideVal(val)}
              minimumTrackTintColor={'purple'}
              thumbTintColor={'purple'}
              style={{width: '90%'}}
            />
          </View>
        </View>

        <CircularButton
          backgroundColor={Colors.purple}
          onPress={() => navigation.navigate('OnBoarding7')}
        />
      </SafeAreaView>
    </>
  );
};
