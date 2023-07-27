import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  headerText: TextStyle;
  headerInfoText: TextStyle;
  headerSkipText: TextStyle;
  mainContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  headerText: {
    color: Colors.black,
    fontSize: moderateScale(19),
    fontWeight: '700',
  },
  headerInfoText: {
    color: Colors.black,
    fontSize: moderateScale(22),
    fontWeight: '700',
    // marginLeft: 10,
  },
  headerSkipText: {
    color: Colors.purple,
    fontSize: moderateScale(17),
    fontWeight: '700',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    margin: moderateScale(10),
  },
});

export default styles;
