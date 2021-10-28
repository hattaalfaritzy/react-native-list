import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useState, useEffect, useCallback} from 'react';
import {RootStackParamList, Stacks} from '../shared/Navigations';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Icon, Box, Input, VStack, HStack, Image} from 'native-base';

//STYLES
import styles from './styles/HomeStyles';
import {FlatGrid} from 'react-native-super-grid';
import {Colors, Metrics, Fonts, Images} from '../themes';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import {Octokit} from '@octokit/core';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
}

const octokit = new Octokit({
  auth: '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',
});

const Home: FC<Props> = ({navigation}) => {
  const [loadFont, setLoadFont] = useState(true);

  const [listRepo, setListRepo] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const _loadFontsAsync = async () => {
    return await Font.loadAsync(Fonts.type);
  };

  const search = useCallback(async () => {
    const {data} = await octokit.request('GET /search/repositories', {
      q: searchText,
    });

    setListRepo(data.items ? data.items : []);
    setIsSearching(false);
  }, [searchText]);

  const getRepo = useCallback(async () => {
    if (searchText) {
      search();
    } else {
      const {data} = await octokit.request('GET /users/{username}/repos', {
        username: 'octokit',
      });
      setListRepo(data);
    }
  }, [searchText, search]);

  useEffect(() => {
    if (!isSearching) {
      getRepo();
    }
  }, [isSearching, getRepo]);

  if (loadFont) {
    return (
      <AppLoading
        startAsync={_loadFontsAsync}
        onFinish={() => {
          setLoadFont(false);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.containerScreen}>
        <React.Fragment>
          <Box
            shadow={1}
            bgColor={Colors.whiteColor}
            borderRadius="full"
            my={Fonts.size.size20}
            mx={Fonts.size.size20}>
            <Input
              InputLeftElement={
                <Icon
                  as={<AntDesign name={'search1'} />}
                  size="md"
                  m={2}
                  _light={{
                    color: Colors.greyColor,
                  }}
                  _dark={{
                    color: Colors.greyColor,
                  }}
                />
              }
              InputRightElement={
                <TouchableOpacity onPress={() => {setSearchText('');}}>
                  <Icon
                    as={<AntDesign name={'close'}/>}
                    size="sm"
                    mr={Fonts.size.size10}
                    _light={{
                      color: Colors.greyColor,
                    }}
                    _dark={{
                      color: Colors.greyColor,
                    }}
                  />
                </TouchableOpacity>
              }
              placeholder="Search"
              variant={'rounded'}
              isFullWidth={true}
              _light={{
                placeholderTextColor: Colors.greyColor,
                fontFamily: 'varela',
              }}
              _dark={{
                placeholderTextColor: Colors.greyColor,
                fontFamily: 'varela',
              }}
              _focus={{
                borderColor: Colors.transparent,
              }}
              value={searchText}
              onChangeText={value => {
                setSearchText(value);
              }}
              onFocus={() => {
                setIsSearching(true);
                setListRepo([]);
              }}
              onEndEditing={() => {
                getRepo();
              }}
            />
          </Box>
          {listRepo.length || isSearching ? (
            <FlatGrid
              data={listRepo}
              itemDimension={Metrics.screenWidth - Fonts.size.size20}
              style={{marginVertical: Metrics.screenWidth / -18.75}}
              spacing={Fonts.size.size20}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.cardSection}
                  onPress={() =>
                    navigation.navigate(Stacks.details, {
                      user: item.owner.login,
                      repo: item.name,
                    })
                  }>
                  <Box
                    bgColor={Colors.whiteColor}
                    borderRadius={Fonts.size.size7}>
                    <VStack
                      direction={'row'}
                      alignItems="center"
                      px={Fonts.size.size7}>
                      {item.owner.avatar_url ? (
                        <Image
                          source={{
                            uri: item.owner.avatar_url,
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
                        <Text style={styles.nameList}>{item.name}</Text>
                        <Text style={styles.addressList}>{item.html_url}</Text>
                      </HStack>
                    </VStack>
                  </Box>
                </TouchableOpacity>
              )}
            />
          ) : (
            <HStack
              direction={'column'}
              px={Fonts.size.size20}
              py={Fonts.size.size20}
              alignItems="center"
              justifyContent="center"
              style={styles.containerImg}>
              <Image source={Images.noData} alt="Data not found" size={'2xl'} />
              <Text style={styles.labelImg}>Data not found :(</Text>
            </HStack>
          )}
        </React.Fragment>
      </ScrollView>
    </View>
  );
};

export default Home;
