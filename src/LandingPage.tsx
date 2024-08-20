import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import CategoryTile from './components/CategoryTile';

type LandingPageNavigationProp = StackNavigationProp<RootStackParamList, 'LandingPage'>;

type Props = {
  navigation: LandingPageNavigationProp;
};

export default function LandingPage({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FarmGo</Text>
      <CategoryTile
        title="Animal Feed"
        image={require('./assets/animal_feed.jpeg')}
        onPress={() => navigation.navigate('AnimalFeedPage')}
      />
      <CategoryTile
        title="Human Food"
        image={require('./assets/human_food.jpeg')}
        onPress={() => navigation.navigate('HumanFoodPage')}
      />
      <CategoryTile
        title="Fertilizers"
        image={require('./assets/fertilizers.jpeg')}
        onPress={() => navigation.navigate('FertilizersPage')}
      />
      <CategoryTile
        title="Seeds"
        image={require('./assets/seeds.jpeg')}
        onPress={() => navigation.navigate('SeedsPage')}
      />
      <CategoryTile
        title="Miscellaneous Items"
        image={require('./assets/misc_items.jpeg')}
        onPress={() => navigation.navigate('MiscellaneousItemsPage')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
    textAlign: 'center',
  },
});