// SearchBar.tsx
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface SearchBarProps {
  onFilterToggle?: () => void;
  filterOpen: boolean;
  onSearchChange?: (text: string) => void;
}

export function SearchBar({ onFilterToggle, filterOpen, onSearchChange }: SearchBarProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <>
      <View style={[styles.searchContainer, { backgroundColor: theme.background, borderColor: theme.inputBorder }]}>
        <Feather name="search" size={20} color={theme.text} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={theme.text}
          style={[styles.searchInput, { color: theme.text }]}
          onChangeText={onSearchChange}
        />
        <View style={styles.verticalDivider} />
        <TouchableOpacity style={styles.filterButton} onPress={onFilterToggle}>
          <Text style={[styles.filterText, { color: theme.gray }]}>Filter By</Text>
          <Entypo name="chevron-down" size={10} color={theme.gray} />
        </TouchableOpacity>
      </View>

      {/* Dropdown menu */}
      {filterOpen && (
        <View style={[styles.dropdown, { backgroundColor: theme.gray, borderColor: theme.border }]}>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Date</Text>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Category</Text>
          <Text style={[styles.dropdownItem, { color: theme.text }]}>By Popularity</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginHorizontal: 40,
    marginTop: 20,
    borderWidth: 0.32,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  filterText: {
    fontSize: 10,
    marginRight: 4,
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
});
