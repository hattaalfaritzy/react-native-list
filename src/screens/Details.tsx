import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useState, useEffect} from 'react';
import {RootStackParamList, Stacks} from '../shared/Navigations';
import {Text, View, ScrollView} from 'react-native';
import {Icon, Box, VStack, HStack, Image} from 'native-base';

//STYLES
import styles from './styles/DetailsStyles';
import {FlatGrid} from 'react-native-super-grid';
import {Colors, Metrics, Fonts} from '../themes';
import {FontAwesome} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import {Octokit} from '@octokit/core';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
}

const Details: FC<Props> = ({route}) => {
  const [loadFont, setLoadFont] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(Fonts.type);
    setLoadFont(true);
  };

  useEffect(() => {
    _loadFontsAsync();

    const octokit = new Octokit({
      auth: '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',
    });

    async function getRepoContributors() {
      const {data} = await octokit.request(
        'GET /repos/{owner}/{repo}/contributors',
        {
          owner: route.params.user,
          repo: route.params.repo,
        },
      );
      setListRepo(data ? data : []);
    }

    getRepoContributors();
  }, [route]);

  const [listRepo, setListRepo] = useState([]);

  if (loadFont) {
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={styles.containerScreen}>
          <React.Fragment>
            <FlatGrid
              data={listRepo}
              itemDimension={Metrics.screenWidth - Fonts.size.size20}
              style={{marginBottom: Metrics.screenWidth / -18.75}}
              spacing={Fonts.size.size20}
              renderItem={({item}) => (
                <View style={styles.cardSection}>
                  <Box
                    bgColor={Colors.whiteColor}
                    borderRadius={Fonts.size.size7}>
                    <VStack
                      direction={'row'}
                      alignItems="center"
                      px={Fonts.size.size7}>
                      {item.avatar_url ? (
                        <Image
                          source={{
                            uri: item.avatar_url,
                          }}
                          alt="Alternate Text"
                          size={'xs'}
                          borderRadius="full"
                        />
                      ) : (
                        <Icon
                          as={<FontAwesome name={'user-circle'} />}
                          size="md"
                          m={2}
                          _light={{
                            color: Colors.greyColor,
                          }}
                          _dark={{
                            color: Colors.greyColor,
                          }}
                        />
                      )}
                      <HStack
                        direction={'column'}
                        px={Fonts.size.size7}
                        py={Fonts.size.size7}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        style={styles.containerText}>
                        <Text style={styles.nameList}>{item.login}</Text>
                        <Text style={styles.addressList}>{item.html_url}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                </View>
              )}
            />
          </React.Fragment>
        </ScrollView>
      </View>
    );
  } else {
    return <AppLoading />;
  }
};

export default Details;
