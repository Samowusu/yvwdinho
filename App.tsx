/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StorybookUI from './.storybook';

const storybookApp = true;
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Welcome HOme!</Text>
    </SafeAreaView>
  );
}

export default storybookApp ? StorybookUI : App;
