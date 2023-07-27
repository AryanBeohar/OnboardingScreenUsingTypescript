import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';
import Colors from '../../utlis/colors/Colors';

interface Styles {
  centerContainer: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
  slideContent: ViewStyle;
  slideValue: TextStyle;
  contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  centerContainer: {flex: 0.9},
  headingText: {
    fontSize: moderateScale(40),
    color: Colors.black,
  },
  mainContainer: {
    // marginTop: moderateScale(10),
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    color: Colors.grey,
  },
  slideContent: {marginTop: moderateScale(10), alignItems: 'center'},
  slideValue: {
    fontWeight: '700',
    fontSize: moderateScale(40),
    color: Colors.black,
  },
  contentContainer: {
    flex: 0.75,
    width: '90%',
    alignSelf: 'center',
  },
});
export default styles;
