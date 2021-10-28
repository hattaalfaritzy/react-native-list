import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.size20,
    color: Colors.blackColor,
    fontFamily: 'montserratSemiBold',
  },
  label: {
    fontSize: Fonts.size.size12,
    fontFamily: 'varela',
  },
});
