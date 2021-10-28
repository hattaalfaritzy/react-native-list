import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles/backHeaderStyles';
import {Fonts, Colors} from '../themes';
import {Octicons} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

const BackHeader = (props: {navigation?: any; withBack?: any}) => {
  const [loadFont, setLoadFont] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(Fonts.type);
    setLoadFont(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  });

  const {withBack} = props;

  if (loadFont) {
    return (
      <View style={styles.containerBack}>
        {withBack && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon
              as={<Octicons name={'chevron-left'} />}
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

BackHeader.defaultProps = {
  withBack: false,
};

export default BackHeader;
