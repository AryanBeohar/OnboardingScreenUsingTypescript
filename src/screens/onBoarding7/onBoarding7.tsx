import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SubGender from '../../components/sudGender/SubGender';
import CircularButton from '../../components/circlularButton/CircularButton';
import Colors from '../../utlis/colors/Colors';
import styles from './style';
import Header from '../../components/header/Header';
import {StackNavigationProp} from '@react-navigation/stack';

interface Item {
  id: number;
  title: string;
}

interface Props {
  navigation: StackNavigationProp<any, any>;
}

export const OnBoarding7: React.FC<Props> = ({navigation}) => {
  const DATA: Item[] = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
    {
      id: 4,
      title: 'First Item',
    },
    {
      id: 5,
      title: 'fourthItemisthebestin the world',
    },
    {
      id: 6,
      title: 'fifth Item',
    },
    {
      id: 7,
      title: 'sixth Item',
    },
    {
      id: 8,
      title: 'seventh Item',
    },
    {
      id: 9,
      title: 'eight Item',
    },
  ];
  const [optionVisible, setOptionVisible] = useState(false);
  const showOptions = () => {
    setOptionVisible(true);
  };
  const [selectedItem, setSelectedItem] = useState<number | undefined>();
  console.log(selectedItem);
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Header onPressArrow={() => navigation.goBack()} num={7} />
        <View style={styles.contentContainer}>
          <Text
            style={
              styles.headingText
            }>{`What gender best \ndescribes you?`}</Text>
          <SubGender
            selectedKey={setSelectedItem}
            data={optionVisible ? DATA : DATA.slice(0, 3)}
            onPressMore={showOptions}
          />
        </View>
        <CircularButton
          disable={!selectedItem}
          backgroundColor={selectedItem ? Colors.purple : Colors.lightGrey}
          onPress={() => null}
        />
      </SafeAreaView>
    </>
  );
};
