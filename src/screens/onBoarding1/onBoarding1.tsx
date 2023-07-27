import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import InputField from '../../components/inputField/InputField';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import Colors from '../../utlis/colors/Colors';
import Header from '../../components/header/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

interface OnBoarding1Props {
  onChangeTextFirstName: (text: string) => void;
  onPressButton: () => void;
  firstName: string;
  navigation: StackNavigationProp<any, any>;
}

export const OnBoarding1: React.FC<OnBoarding1Props> = ({navigation}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [pronunciationVisible, setPronunciationVisible] =
    useState<boolean>(false);
  useEffect(() => {
    if (firstName.length === 0) {
      setPronunciationVisible(false);
    }
  }, [firstName]);
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressArrow={() => navigation.goBack()} num={1} />
        <View style={styles.contentConatiner}>
          <Text style={styles.headingText}>
            {`Let's get started,\nwhat's your first\nname?`}
          </Text>

          <View style={styles.inputContent}>
            <InputField
              value={firstName}
              onChangeText={name => setFirstName(name)}
            />
          </View>
          <View style={styles.recordingContainer}>
            <View style={styles.recordingIconAndName}>
              <View style={[styles.icon(pronunciationVisible, firstName)]}>
                {pronunciationVisible ? (
                  <TouchableOpacity onPress={() => null}>
                    <Image
                      source={require('../../icons/purplePlay.png')}
                      style={{width: 28, height: 28}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    disabled={firstName.length < 1 ? true : false}
                    onPress={() => setPronunciationVisible(true)}>
                    {firstName.length > 0 ? (
                      <Image
                        source={require('../../icons/purpleMic.png')}
                        style={{width: 28, height: 28}}
                      />
                    ) : (
                      <Image
                        source={require('../../icons/greyMic.png')}
                        style={{width: 28, height: 28}}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>
              <Text
                style={[
                  styles.recordingText(pronunciationVisible, firstName),
                ]}>{`Record Pronunciation`}</Text>
            </View>
            {pronunciationVisible ? (
              <Icon name={'trash-2'} color={Colors.lightGrey} size={25} />
            ) : null}
          </View>
        </View>

        <CircularButton
          disable={firstName?.length >= 3 ? false : true}
          onPress={() => navigation.navigate('OnBoarding2', {name: firstName})}
          backgroundColor={
            firstName?.length >= 3 ? Colors.purple : Colors.lightGrey
          }
        />
      </SafeAreaView>
    </>
  );
};
