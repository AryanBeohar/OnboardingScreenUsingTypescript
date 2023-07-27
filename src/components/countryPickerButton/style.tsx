import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  countryTextContent: ViewStyle;
  countryText: TextStyle;
  headerContainer: ViewStyle;
  searchIconContent: ViewStyle;
  searchIcon: ViewStyle;
  mainContentContainer: ViewStyle;
  countryListContent: ViewStyle;
  list: ViewStyle;
  listEmojiAndNameContent: ViewStyle;
  emojiContent: ViewStyle;
  emoji: TextStyle;
  name: TextStyle;
  countryCode: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  headingText: {
    fontSize: moderateScale(40),
    color: Colors.black,
  },
  contentConatiner: {
    flex: 0.75,
    width: '90%',
    alignSelf: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryTextContent: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginVertical: 8,
  },
  countryText: {color: 'black', fontWeight: '500'},

  headerContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    height: 40,
    alignItems: 'center',
  },
  searchIconContent: {
    flex: 0.1,
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
    // marginLeft: 30,
  },
  mainContentContainer: {flex: 0.8},
  countryListContent: {
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    marginTop: 10,
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
  },
  listEmojiAndNameContent: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiContent: {
    // borderRadius: 24,
    // width: 25,
    // height: 25,
    // overflow: 'hidden',
    borderRadius: 11,
    width: 22,
    height: 22,
    overflow: 'hidden',
  },
  emoji: {
    // fontSize: 42,
    // textAlign: 'center',
    // marginTop: -13,
    // marginLeft: -10,
    fontSize: 42,
    textAlign: 'center',
    marginTop: -15,
    marginLeft: -12,
  },
  name: {paddingLeft: 10},
  countryCode: {paddingLeft: 2},
});

export default styles;
