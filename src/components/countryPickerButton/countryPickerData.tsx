import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CountryData from '../../utlis/countryPickerData/Country.json';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../utlis/colors/Colors';
import styles from './style';

interface Country {
  dial_code: string;
  emoji: string;
  name_en: string;
}

interface CountryPickerDataProps {
  showModel: boolean;
  setShowModel: (show: boolean) => void;
  setData: (data: Country) => void;
}

const CountryPickerData: React.FC<CountryPickerDataProps> = ({
  showModel,
  setShowModel,
  setData,
}) => {
  const refRBSheet = useRef<RBSheet | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [countryCode, setCountryCode] = useState<Country | null>(null);
  console.log('country', countryCode);

  useEffect(() => {
    if (showModel) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [showModel]);

  useEffect(() => {
    if (countryCode) setData(countryCode);
    else {
      setData({
        dial_code: '+91',
        emoji: '🇮🇳',
        name_en: 'India',
      });
    }
  }, [countryCode]);

  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={1000}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.countryTextContent}>
            <Text style={styles.countryText}>{`Country/Region`}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current?.close(), setShowModel(false);
            }}>
            <Icon name={'x'} size={22} color={'black'} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.headerContainer}>
          <View style={styles.searchIconContent}>
            <Image
              style={styles.searchIcon}
              source={require('../../icons/searchIcon.png')}
            />
          </View>

          <View style={styles.mainContentContainer}>
            <TextInput
              placeholder="search..!"
              onChangeText={text => setSearchText(text)}
            />
          </View>
        </View>
        <ScrollView style={styles.countryListContent}>
          {CountryData.filter((val: Country) => {
            if (searchText === '') {
              return val;
            } else if (
              val?.name_en
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            ) {
              return val;
            }
          }).map((i: Country, index: number) => {
            return (
              <TouchableOpacity
                onPress={() => setCountryCode(i)}
                style={styles.list}>
                <View style={styles.listEmojiAndNameContent}>
                  <View style={styles.emojiContent}>
                    <Text style={styles.emoji}>{i?.emoji}</Text>
                  </View>
                  <Text style={styles.name}>{i?.name_en}</Text>
                  <Text style={styles.countryCode}>{`(${i?.dial_code})`}</Text>
                </View>
                <View style={{flex: 0.1}}>
                  {countryCode?.dial_code === i?.dial_code && (
                    <Icon name={`check`} color={Colors.purple} size={24} />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default CountryPickerData;
