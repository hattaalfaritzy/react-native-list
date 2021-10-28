import Metrics from './Metrics';

const type = {
  varela: require('../../assets/fonts/VarelaRound-Regular.ttf'),
  montserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
  montserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  montserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,

  // iFarm
  size100: Metrics.screenWidth / 3.75,
  size60: Metrics.screenWidth / 6.25,
  size40: Metrics.screenWidth / 9.375,
  size50: Metrics.screenWidth / 7.5,
  size45: Metrics.screenWidth / 8.3333,
  size37: Metrics.screenWidth / 10,
  size30: Metrics.screenWidth / 12.5,
  size28: Metrics.screenWidth / 13.88,
  size25: Metrics.screenWidth / 15,
  size22: Metrics.screenWidth / 16.59,
  size20: Metrics.screenWidth / 18.75,
  size18: Metrics.screenWidth / 20.8,
  size15: Metrics.screenWidth / 25,
  size14: Metrics.screenWidth / 26.78571,
  size12: Metrics.screenWidth / 31.25,
  size10: Metrics.screenWidth / 37.5,
  size8: Metrics.screenWidth / 46.85,
  size7: Metrics.screenWidth / 53.57,
};

export default {
  type,
  size,
};
