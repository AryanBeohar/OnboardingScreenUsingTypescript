import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Colors from '../../utlis/colors/Colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type NavigationProps = StackNavigationProp<any, 'OnBoarding2'>;
type RouteProps = RouteProp<any, 'OnBoarding2'>;

interface Props {
  navigation: NavigationProps;
  route: RouteProps;
  num?: string;
}

export const OnBoarding4: React.FC<Props> = ({navigation, route}) => {
  const [otpInput, setOtpInput] = useState('');
  const phoneNum = route?.params?.number;
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Text
          style={styles.headingText}>{`Enter your \nVerification code`}</Text>
        <View style={{flex: 0.17}}>
          <OTPInputView
            pinCount={6}
            codeInputFieldStyle={styles.inputContent}
            onCodeFilled={code => {
              setOtpInput(code);
            }}
            keyboardType="number-pad"
          />

          <Text style={{color: Colors.grey}}>
            {`We send a one-time verification code to \n${phoneNum}`}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.changeText}>{` change`}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
      {console.log(otpInput.length)}
      <CircularButton
        disable={otpInput.length === 6 ? false : true}
        onPress={() => navigation.navigate('OnBoarding5')}
        backgroundColor={
          otpInput.length === 6 ? Colors.purple : Colors.lightGrey
        }
      />
    </>
  );
};
