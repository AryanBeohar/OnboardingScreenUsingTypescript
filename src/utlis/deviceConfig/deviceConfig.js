import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';

const {width, height} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export const getDimensions = () => {
  const {height, width} = Dimensions.get('window');
  return {height, width};
};

export const isIOS = () => Platform.OS === 'ios';

export const hasContactPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_SMS,
  );
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_SMS,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Permission denied by user.', ToastAndroid.SHORT);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    // setIsLocation(true)
  }
  return false;
};
