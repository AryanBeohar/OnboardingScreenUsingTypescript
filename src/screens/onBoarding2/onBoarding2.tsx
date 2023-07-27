import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import InputField from '../../components/inputField/InputField';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import Colors from '../../utlis/colors/Colors';
import Header from '../../components/header/Header';
import Icon from 'react-native-vector-icons/Feather';

type NavigationProps = StackNavigationProp<any, 'OnBoarding2'>;
type RouteProps = RouteProp<any, 'OnBoarding2'>;

interface OnBoarding2Props {
  navigation: NavigationProps;
  route: RouteProps;
  onChangeTextFirstName: (text: string) => void;
  onPressButton: () => void;
  firstName: string;
}

export const OnBoarding2: React.FC<OnBoarding2Props> = ({
  navigation,
  route,
}) => {
  const [lastName, setLastName] = useState<string>('');

  const [pronunciationVisible, setPronunciationVisible] =
    useState<boolean>(false);
  const firstName = route?.params?.name;
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressArrow={() => navigation.goBack()} num={2} />
        <View style={styles.contentContainer}>
          <Text style={styles.headingText}>
            {` Ok,${firstName}! How\n about your last\n name?`}
          </Text>
          <View style={styles.inputContent}>
            <InputField
              placeholder="Last name"
              onChangeText={name => setLastName(name)}
              value={lastName}
            />
          </View>
          <View style={styles.recordingContainer}>
            <View style={styles.recordingIconAndName}>
              <View style={[styles.icon(pronunciationVisible, lastName)]}>
                {pronunciationVisible ? (
                  <TouchableOpacity onPress={() => null}>
                    <Image
                      source={require('../../icons/purplePlay.png')}
                      style={{width: 28, height: 28}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    disabled={lastName.length < 1 ? true : false}
                    onPress={() => setPronunciationVisible(true)}>
                    {lastName.length > 0 ? (
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
                  styles.recordingText(pronunciationVisible, lastName),
                ]}>{`Record Pronunciation`}</Text>
            </View>
            {pronunciationVisible ? (
              <Icon name={'trash-2'} color={Colors.lightGrey} size={25} />
            ) : null}
          </View>
        </View>
        <CircularButton
          disable={lastName?.length >= 3 ? false : true}
          onPress={() => navigation.navigate('OnBoarding3')}
          backgroundColor={
            lastName?.length >= 3 ? Colors.purple : Colors.lightGrey
          }
        />
      </SafeAreaView>
    </>
  );
};
