import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  [x: string]: StyleProp<TextStyle>;
  inputContent: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  changeText: {
    fontWeight: '600',
    color: Colors.black,
    top: 4,
  },
  inputContent: {
    borderRadius: moderateScale(8),
    backgroundColor: 'white',
    width: moderateScale(50),
    height: moderateScale(50),
    color: 'black',
  },
  headingText: {
    fontSize: moderateScale(40),
    color: Colors.black,
  },
  mainContainer: {
    marginTop: '10%',
    flex: 0.85,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  stepper: {margin: moderateScale(10)},
});

export default styles;
