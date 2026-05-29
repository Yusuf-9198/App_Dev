import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
  );
}
function DetailScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
      </View>
  );
}

const Stack = createNativeStackNavigator({
  groups: {},
  screens: {
    Home: HomeScreen,
    Details:DetailScreen
  }
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation />;
}
