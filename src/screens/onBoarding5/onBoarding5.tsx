import React, {useRef, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
} from 'react-native-draggable-flatlist';
import Animated from 'react-native-reanimated';
import CircularButton from '../../components/circlularButton/CircularButton';
import styles from './style';
import Header from '../../components/header/Header';
import Colors from '../../utlis/colors/Colors';
import {StackNavigationProp} from '@react-navigation/stack';

interface Item {
  key: string;
  label: string;
  backgroundColor: string;
}

interface Props {
  navigation: StackNavigationProp<any, any>;
}

export const OnBoarding5: React.FC<Props> = ({navigation}) => {
  const [data, setData] = useState<Item[]>([
    {
      key: '1',
      label: 'Home',
      backgroundColor: 'skyblue',
      image: 'home',
    },
    {
      key: '2',
      label: 'Music',
      backgroundColor: 'skyblue',
      image: 'music',
    },
    {
      key: '3',
      label: 'Watch',
      backgroundColor: 'red',
      image: 'watch',
    },
    {
      key: '4',
      label: 'T.V',
      backgroundColor: 'yellow',
      image: 'tv',
    },
    {
      key: '5',
      label: 'Youtube',
      backgroundColor: 'pink',
      image: 'youtube',
    },
  ]);

  const ref = useRef<DraggableFlatList<Item> | null>(null);

  const renderItem = ({
    item,
    drag,
    getIndex,
  }: {
    item: Item;
    drag: () => void;
    getIndex: () => number;
  }) => {
    const {isActive} = useOnCellActiveAnimation();

    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={0.5}>
          <ShadowDecorator>
            <View style={styles.mainContentContainer}>
              <Text style={styles.contentNumber}>{getIndex() + 1}</Text>
              <TouchableOpacity
                onLongPress={drag}
                activeOpacity={1}
                style={[styles.list, {elevation: isActive ? 30 : 0}]}>
                <Animated.View style={styles.listData}>
                  <View style={styles.Icon}>
                    <Icon size={15} name={item.image} color={Colors.black} />
                  </View>
                  <Text> {item.label}</Text>
                  <Icon name={'align-justify'} size={20} color={Colors.grey} />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPressArrow={() => navigation.goBack()} num={5} />
      <Text
        style={
          styles.headingText
        }>{`Rank your preferred \nmodes of transport`}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.listContent}>
          <GestureHandlerRootView>
            <DraggableFlatList<Item>
              data={data}
              ref={ref}
              keyExtractor={item => item.key}
              onDragEnd={({data}) => setData(data)}
              renderItem={renderItem}
              contentContainerStyle={styles.listMainContent}
            />
          </GestureHandlerRootView>
        </View>
      </View>
      <CircularButton
        onPress={() => navigation.navigate('OnBoarding6')}
        backgroundColor="purple"
      />
    </SafeAreaView>
  );
};
