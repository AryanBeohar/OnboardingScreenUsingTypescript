import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  borderColor: () => void;
  borderColor1: () => void;
  borderColor2: () => void;
  borderColor3: () => void;
  borderColor4: () => void;
  borderColor5: () => void;
  borderColor6: () => void;
  borderColor7: () => void;
  borderColor8: () => void;
  borderColor9: () => void;
  borderColor10: () => void;
  borderColor11: () => void;

  mainContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  borderColor: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 1 ? 'purple' : 'yellow',
  }),
  borderColor1: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor:
      num === 2 ? 'purple' : num === 1 ? 'lightgrey' : 'yellow',
  }),
  borderColor2: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 3 ? 'purple' : num < 3 ? 'lightgrey' : 'yellow',
  }),
  borderColor3: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 4 ? 'purple' : num < 4 ? 'lightgrey' : 'yellow',
  }),
  borderColor4: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 5 ? 'purple' : num < 5 ? 'lightgrey' : 'yellow',
  }),
  borderColor5: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 6 ? 'purple' : num < 6 ? 'lightgrey' : 'yellow',
  }),
  borderColor6: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 7 ? 'purple' : num < 7 ? 'lightgrey' : 'yellow',
  }),
  borderColor7: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 8 ? 'purple' : num < 8 ? 'lightgrey' : 'yellow',
  }),
  borderColor8: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor: num === 9 ? 'purple' : num < 9 ? 'lightgrey' : 'yellow',
  }),
  borderColor9: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor:
      num === 10 ? 'purple' : num < 10 ? 'lightgrey' : 'yellow',
  }),
  borderColor10: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor:
      num === 11 ? 'purple' : num < 11 ? 'lightgrey' : 'yellow',
  }),
  borderColor11: (num: number) => ({
    borderBottomWidth: 3,
    width: '7%',
    borderBottomColor:
      num === 12 ? 'purple' : num < 12 ? 'lightgrey' : 'yellow',
  }),
  mainContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

export default styles;
