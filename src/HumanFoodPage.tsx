import React, { useState, useEffect } from 'react';
import CategoryPageTemplate from './CategoryPageTemplate';
import { PHONE_NUMBER, CATEGORY_ITEMS } from './config';
import { ScrollView } from 'react-native';

export default function HumanFoodPage() {
  const [items, setItems] = useState(CATEGORY_ITEMS.HumanFood);

  useEffect(() => {
    // Placeholder for future API call
    // Example:
    // fetch('/api/human-food')
    //   .then(response => response.json())
    //   .then(data => setItems(data))
    //   .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <ScrollView>
      <CategoryPageTemplate category="Human Food" phoneNumber={PHONE_NUMBER} items={items} />
    </ScrollView>
  );
}