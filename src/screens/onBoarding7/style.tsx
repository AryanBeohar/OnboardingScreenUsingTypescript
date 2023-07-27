import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  centerContainer: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  centerContainer: {flex: 0.9},
  headingText: {
    fontSize: moderateScale(40),
    color: Colors.black,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    color: Colors.grey,
  },
  contentContainer: {
    flex: 0.75,
    width: '90%',
    alignSelf: 'center',
  },
});
export default styles;
