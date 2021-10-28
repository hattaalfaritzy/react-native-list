import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/logoTitleStyles';
import {Fonts} from '../themes';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

const LogoTitle = (props: {title?: any; label?: any}) => {
  const [loadFont, setLoadFont] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(Fonts.type);
    setLoadFont(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  });

  const {title, label} = props;

  if (loadFont) {
    return (
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
    );
  } else {
    return <AppLoading />;
  }
};

LogoTitle.defaultProps = {};

export default LogoTitle;
