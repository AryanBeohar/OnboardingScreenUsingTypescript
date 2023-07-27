import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../utlis/colors/Colors';
import {moderateScale} from '../../utlis/deviceConfig/deviceConfig';

interface Styles {
  inputContent: ViewStyle;
  headingText: TextStyle;
  mainContainer: ViewStyle;
  header: ViewStyle;
  contentConatiner: ViewStyle;
  recordingContainer: ViewStyle;
  recordingIconAndName: ViewStyle;
  icon: () => void;
  recordingText: () => void;
}

const styles = StyleSheet.create<Styles>({
  inputContent: {marginTop: moderateScale(10)},
  header: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
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
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    color: Colors.grey,
  },
  recordingContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recordingIconAndName: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: (pronunciationVisible: boolean, firstName: string) => ({
    width: 38,
    height: 38,
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: pronunciationVisible
      ? Colors.purple
      : firstName.length < 1
      ? Colors.lightGrey
      : Colors.purple,
  }),
  recordingText: (pronunciationVisible: boolean, firstName: string) => ({
    color: pronunciationVisible
      ? Colors.purple
      : firstName.length < 1
      ? Colors.lightGrey
      : Colors.purple,
    fontSize: 15,
  }),
});

export default styles;
