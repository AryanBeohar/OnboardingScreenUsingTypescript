import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Style';
import Colors from '../../utlis/colors/Colors';

interface ItemData {
  id: number;
  key: string;
  title: string;
}

interface SubGenderProps {
  data: any;
  selectedKey: any;
  onPressMore: () => void;
}

const SubGender: React.FC<SubGenderProps> = ({
  data,
  selectedKey,
  onPressMore,
}) => {
  const [genderKey, setGenderKey] = useState<number | undefined>();

  const selectGender = (i: number) => {
    setGenderKey(i);
    selectedKey(i);
  };

  const renderItem = ({item, index}: {item: ItemData; index: number}) => {
    console.log(item);
    return (
      <View>
        <TouchableOpacity
          key={item.key}
          onPress={() => selectGender(item.id)}
          style={[
            styles.mainContainer,
            {
              backgroundColor:
                item?.id === genderKey ? 'lightgreen' : 'lightgrey',
            },
          ]}>
          {item.id === genderKey ? (
            <Icon color={Colors.black} name={'check'} size={17} />
          ) : null}
          <Text style={{color: Colors.black}}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content(data)}
      />
      {data.length <= 3 && (
        <TouchableOpacity style={styles.moreShow} onPress={onPressMore}>
          <Text
            style={{
              color: Colors.purple,
            }}>{`More`}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SubGender;
