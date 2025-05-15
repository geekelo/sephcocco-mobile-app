import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { SearchBar } from '../common/SearchBar';

export function HeroPage() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Search bar with filter */}
     <SearchBar onFilterToggle={toggleFilter} filterOpen={filterOpen} />

      {/* Dropdown menu (fake options for now) */}
      {filterOpen && (
        <View style={[styles.dropdown, { backgroundColor: theme.gray, borderColor: theme.border }]}>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Date</Text>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Category</Text>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Popularity</Text>
        </View>
      )}

      {/* Hero Image with labels */}
      <View style={styles.heroImageContainer}>
        <Image
          source={require('@/assets/images/Rectangle 4(1).png')} // replace with your image path
          style={styles.heroImage}
        />
       <ThemedView style={[styles.imageLabelLeft]}>
        <View style={styles.imageBadgeRight} >
          <ThemedText fontFamily='Raleway-Regular' type='subtitle' style={[{color:theme.text, fontSize:14, }]}>Shop Amazing Products at affordable prices</ThemedText>
       
        </View>
        </ThemedView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
  dropdown: {
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
  dropdownItem: {
    paddingVertical: 6,
    fontSize: 16,
  },
  heroImageContainer: {
    marginTop: 20,
  
    overflow: 'hidden',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: 170,
    resizeMode:'contain'
   
  },
  imageLabelLeft: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: '#DACCB5',
  width: '30%',
  justifyContent: 'center',  // Center vertically
  alignItems: 'center',      // Center horizontally
  borderTopLeftRadius: 6,
  borderBottomLeftRadius: 6,
   shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 0,
  elevation: 1,
  
},

  imageBadgeRight: {
   
    alignItems:'center',
    paddingHorizontal:20
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
  },
});
