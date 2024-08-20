import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/LandingPage';
import AnimalFeedPage from './src/AnimalFeedPage';
import HumanFoodPage from './src/HumanFoodPage';
import FertilizersPage from './src/FertilizersPage';
import MiscellaneousItemsPage from './src/MiscellaneousItemsPage';
import SeedsPage from './src/SeedsPage';

export type RootStackParamList = {
  LandingPage: undefined;
  AnimalFeedPage: undefined;
  HumanFoodPage: undefined;
  FertilizersPage: undefined;
  MiscellaneousItemsPage: undefined;
  SeedsPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="AnimalFeedPage" component={AnimalFeedPage} />
        <Stack.Screen name="HumanFoodPage" component={HumanFoodPage} />
        <Stack.Screen name="FertilizersPage" component={FertilizersPage} />
        <Stack.Screen name="SeedsPage" component={SeedsPage} />
        <Stack.Screen name="MiscellaneousItemsPage" component={MiscellaneousItemsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}