import React from 'react';
import { StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';

interface ProductCardProps {
  image: any;
  title: string;
  favorites: number;
  amount: string;
  stock: number;
  onPress?: () => void;
}

export function Card({
  image,
  title,
  favorites,
  amount,
  stock,
  onPress,
}: ProductCardProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[styles.card, { borderColor: theme.orange }]}>
<ThemedView style={{padding:8}}>
      <Image source={image} style={styles.image} />

      <ThemedView style={styles.rowBetween}>
        <ThemedText style={styles.title} fontFamily='Raleway-Regular'>{title}</ThemedText>
        <ThemedView style={styles.favContainer}>
          <AntDesign name="hearto" size={10} color={theme.orange} />
          <ThemedText style={styles.favText} fontFamily='Raleway-Regular'>{favorites}</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.rowBetween}>
        <ThemedText style={styles.amount} fontFamily='Raleway-Regular'>{amount}</ThemedText>
        <ThemedText style={styles.stockText} fontFamily='Raleway-Regular'>In stock: {stock} items</ThemedText>
      </ThemedView>
      </ThemedView>

      <TouchableOpacity style={[styles.button, {backgroundColor:theme.orange}]} onPress={onPress}>
        <ThemedText style={[styles.buttonText, {color:theme.background}]} fontFamily='Raleway-Regular'>See more</ThemedText>
        <Feather name="arrow-right" size={10} color={theme.background} />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.37,
    borderRadius: 6,
   
    paddingTop:10,
    minWidth:140,
   
    justifyContent: 'space-between',
    minHeight: 250,
  },
  image: {
  width: '100%',
  height: undefined,
  aspectRatio: 1.2, 
  borderRadius: 6,
  resizeMode: 'contain',
  marginBottom: 10,
},

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  favContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  favText: {
    fontSize: 12,
  },
  amount: {
    fontSize: 11,
    fontWeight: '800',
  },
  stockText: {
    fontSize: 6,
    fontWeight:500
  },
  button: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderBottomEndRadius: 7,
     borderBottomStartRadius: 8,
    alignItems: 'center',
    gap: 4,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
  },
});
