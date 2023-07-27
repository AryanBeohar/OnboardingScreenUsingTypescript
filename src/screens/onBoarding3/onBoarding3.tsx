import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import InputField from '../../components/inputField/InputField';
import Icon from 'react-native-vector-icons/Feather';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import Colors from '../../utlis/colors/Colors';
import CountryPickerData from '../../components/countryPickerButton/countryPickerData';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

export const OnBoarding3: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [data, setData] = useState();
  const validNumber = /^[0-9]{0,}$/;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header} />
        <Text
          style={
            styles.headingText
          }>{`What's your mobile \nphone number?`}</Text>

        <View>
          <View style={styles.phoneNumberContent}>
            <View style={styles.countryContent}>
              <View style={styles.emojiIconContent}>
                <Text style={styles.emojiIcon}>{data?.emoji}</Text>
              </View>
              <Text>{data?.dial_code}</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon name="chevron-down" size={22} color={Colors.black} />
              </TouchableOpacity>
            </View>

            <View style={styles.phoneNumberInput}>
              <InputField
                onChangeText={(num: string) => setPhoneNumber(num)}
                customInputStyle={{fontSize: 20}}
                placeholder={'Number'}
                maxLength={10}
                value={phoneNumber}
              />
            </View>
          </View>
          {!validNumber.test(phoneNumber) ||
          (phoneNumber[0] >= '1' && phoneNumber[0] <= '5') ? (
            <Text
              style={styles.validationText}>{`Not a valid phone number`}</Text>
          ) : null}
          <Text style={styles.bottomText}>
            {`We will send you a text with a verification code.\nStanding message and data rates may apply`}
          </Text>
        </View>
        <CountryPickerData
          showModel={modalVisible}
          setShowModel={setModalVisible}
          setData={setData}
          data={data}
        />
      </SafeAreaView>
      <CircularButton
        disable={
          phoneNumber.length === 10 && validNumber.test(phoneNumber)
            ? false
            : true
        }
        onPress={() =>
          navigation.navigate('OnBoarding4', {number: phoneNumber})
        }
        backgroundColor={
          phoneNumber.length === 10 && validNumber.test(phoneNumber)
            ? Colors.purple
            : Colors.lightGrey
        }
      />
    </>
  );
};
