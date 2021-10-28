import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles/additionalIconStyles';
import {Fonts, Colors} from '../themes';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

const AdditionalIcon = (props: {
  navigation?: any;
  showIcon?: any;
  additionalIcon?: any;
}) => {
  const [loadFont, setLoadFont] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(Fonts.type);
    setLoadFont(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  });

  const {showIcon, navigation, additionalIcon} = props;

  if (loadFont) {
    return (
      <View style={styles.containerIcon}>
        {showIcon && (
          <TouchableOpacity
            onPress={() => {
              navigation;
            }}>
            <Icon
              as={additionalIcon}
              size="md"
              m={2}
              _light={{
                color: Colors.blackColor,
              }}
              _dark={{
                color: Colors.blackColor,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  } else {
    return <AppLoading />;
  }
};

AdditionalIcon.defaultProps = {
  showIcon: false,
};

export default AdditionalIcon;
