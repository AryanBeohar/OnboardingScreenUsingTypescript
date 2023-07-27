import {StyleSheet, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  listContent: ViewStyle;
  listData: ViewStyle;
  list: ViewStyle;
  contentContainer: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
  mainContentContainer: ViewStyle;
  contentNumber: ViewStyle;
  Icon: ViewStyle; // Corrected from TextStyle to ViewStyle
  listMainContent: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  listContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: moderateScale(25),
  },
  listMainContent: {
    width: 400,
    alignItems: 'center',
  },
  listData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  list: {
    backgroundColor: Colors.white,
    height: moderateScale(40),
    marginVertical: moderateScale(10),
    width: moderateScale(300),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  contentContainer: {flex: 0.75},
  headingText: {
    fontSize: moderateScale(40),
    color: 'black',
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    color: 'grey',
  },
  mainContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  contentNumber: {
    color: Colors.grey,
    fontSize: moderateScale(20),
    marginRight: 10,
  },
  Icon: {
    width: 30,
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(203, 195, 227)',
  },
});

export default styles;
