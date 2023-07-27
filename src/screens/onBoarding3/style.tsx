import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  bottomText: TextStyle;
  countryContent: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
  phoneNumberContent: ViewStyle;
  phoneNumberInput: TextStyle;
  validationText: TextStyle;
  emojiIconContent: ViewStyle;
  emojiIcon: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  bottomText: {color: Colors.grey, marginTop: 18},
  countryContent: {
    borderWidth: 1,
    width: '29%',
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: moderateScale(10),
  },
  headingText: {
    fontSize: moderateScale(40),
    color: 'black',
  },
  mainContainer: {
    // marginTop: moderateScale(10),
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    color: 'grey',
  },
  phoneNumberContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: moderateScale(25),
  },
  phoneNumberInput: {
    borderWidth: 1,
    width: '66%',
    height: moderateScale(50),
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: moderateScale(10),
    paddingLeft: moderateScale(8),
  },
  validationText: {
    color: Colors.red,
    marginTop: moderateScale(3),
    fontWeight: '500',
    width: '65%',
    marginLeft: '35%',
  },
  header: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  stepper: {margin: moderateScale(10)},
  emojiIconContent: {
    borderRadius: moderateScale(11),
    width: moderateScale(22),
    height: moderateScale(22),
    overflow: 'hidden',
  },
  emojiIcon: {
    fontSize: moderateScale(42),
    textAlign: 'center',
    marginTop: moderateScale(-15),
    marginLeft: moderateScale(-12),
  },
});

export default styles;
