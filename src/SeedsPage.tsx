import React, { useState, useEffect } from 'react';
import CategoryPageTemplate from './CategoryPageTemplate';
import { PHONE_NUMBER, CATEGORY_ITEMS } from './config';
import { ScrollView } from 'react-native';

export default function SeedsPage() {
  const [items] = useState(CATEGORY_ITEMS.Seeds);

  useEffect(() => {
    // Placeholder for future API call
    // Example:
    // fetch('/api/seeds')
    //   .then(response => response.json())
    //   .then(data => setItems(data))
    //   .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <ScrollView>
      <CategoryPageTemplate category="Seeds" phoneNumber={PHONE_NUMBER} items={items} />
    </ScrollView>
  );
}