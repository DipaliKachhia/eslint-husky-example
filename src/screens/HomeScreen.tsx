import React from 'react';
import { ScrollView, Text, useColorScheme, View } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
      <Header />
      <View>
        <Text>EsLint Example</Text>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
