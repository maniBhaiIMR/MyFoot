import React from 'react';
import { View, Button, Linking, Text, StyleSheet } from 'react-native';

interface CategoryPageTemplateProps {
  category: string;
  phoneNumber: string;
  items: { name: string; price: number }[];
}
const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({ category, phoneNumber, items }) => {
    const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const calculateDiscountPrice = (price: number) => {
    return (price * 0.7).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <Text style={styles.contactInfo}>Contact us at: {phoneNumber}</Text>
      <View style={styles.itemList}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemTile}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.originalPrice}>Original Price: ₹{item.price.toFixed(2)}</Text>
            <Text style={styles.discountPrice}>Discount Price: ₹{calculateDiscountPrice(item.price)}</Text>
            <Button title="Call Now to Buy" onPress={handleCallPress} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 20,
  },
  itemList: {
    marginTop: 20,
  },
  itemTile: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 18,
    color: '#dc3545',
    //textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 18,
    color: '#28a745',
    marginBottom: 10,
  },
});

export default CategoryPageTemplate;