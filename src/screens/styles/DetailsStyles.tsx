import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  containerScreen: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.backgroundColor,
  },

  cardSection: {
    display: 'flex',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: Fonts.size.size10,
    backgroundColor: Colors.whiteColor,
  },

  containerText: {
    flex: 1,
    display: 'flex',
  },
  nameList: {
    fontSize: Fonts.size.size14,
    color: Colors.blackColor,
    fontFamily: 'montserratSemiBold',
  },
  addressList: {
    fontSize: Fonts.size.size12,
    color: Colors.blackColor,
    fontFamily: 'varela',
  },
  phoneAddress: {
    fontSize: Fonts.size.size12,
    color: Colors.primaryColor,
  },
});
