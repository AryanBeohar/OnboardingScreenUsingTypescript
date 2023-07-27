import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  mainContainer: ViewStyle;
  content: (data: number) => ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  mainContainer: {
    marginVertical: 8,
    marginLeft: 10,
    padding: 8,
    borderRadius: 20,
    flexDirection: 'row',
  },
  content: data => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignSelf: data?.length <= 3 ? null : 'center',
  }),
  moreShow: {top: -405, left: 15},
});

export default styles;
