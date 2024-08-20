import React, { useState, useEffect } from 'react';
import CategoryPageTemplate from './CategoryPageTemplate';
import { PHONE_NUMBER, CATEGORY_ITEMS } from './config';
import { ScrollView } from 'react-native';

export default function AnimalFeedPage() {
  const [items] = useState(CATEGORY_ITEMS.AnimalFeed);

  useEffect(() => {
    // Placeholder for future API call
    // Example:
    // fetch('/api/animal-feed')
    //   .then(response => response.json())
    //   .then(data => setItems(data))
    //   .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <ScrollView>
      <CategoryPageTemplate category="Animal Feed" phoneNumber={PHONE_NUMBER} items={items} />
    </ScrollView>
  );
}