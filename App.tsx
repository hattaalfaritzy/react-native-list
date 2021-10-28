import React from 'react';
import MainNav from './src/navigations/MainNav';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <MainNav />
    </NativeBaseProvider>
  );
}
