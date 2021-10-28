import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Stacks} from '../shared/Navigations';

import Details from '../screens/Details';
import Home from '../screens/Home';

//IMPORT
import LogoTitle from '../components/logoTitle';
import BackHeader from '../components/backHeader';
import AdditionalIcon from '../components/additionalIcon';

const Stack = createStackNavigator();

const MainStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={Stacks.home}
        component={Home}
        options={() => ({
          headerTitle: () => <LogoTitle title={'Home'} />,
          headerLeft: () => <BackHeader />,
          headerRight: () => <AdditionalIcon />,
        })}
      />
      <Stack.Screen
        name={Stacks.details}
        component={Details}
        options={({navigation}) => ({
          headerTitle: () => (
            <LogoTitle
              title={'Contributors'}
              label={'List of the contributors'}
            />
          ),
          headerLeft: () => (
            <BackHeader withBack={true} navigation={navigation} />
          ),
          headerRight: () => <AdditionalIcon showIcon={false} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
