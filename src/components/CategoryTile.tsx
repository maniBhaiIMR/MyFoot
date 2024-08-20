// src/components/CategoryTile.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  image: any;
  onPress: () => void;
};

export default function CategoryTile({ title, image, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});