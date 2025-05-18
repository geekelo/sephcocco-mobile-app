import React from 'react';
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
  filterOptions: string[];
}

export function SearchBar({ onFilterToggle, filterOpen, onSearchChange, filterOptions }: SearchBarProps) {
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
          <Entypo name="chevron-down" size={14} color={theme.gray} />
        </TouchableOpacity>
      </View>

      {/* Dropdown menu */}
      {filterOpen && (
        <View style={[styles.dropdown, { backgroundColor: '#fff', borderColor: theme.border }]}>
          {filterOptions.map((option, idx) => (
            <Text key={idx} style={[styles.dropdownItem, { color: '#000' }]}>
              {option}
            </Text>
          ))}
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
    elevation: 1,
    marginHorizontal: 40,
    marginTop: 20,
    borderWidth: 0.2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  verticalDivider: {
    width: 0.5,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    width: 220,
  },
  filterText: {
    fontSize: 10,
    marginRight: 4,
  },
 dropdown: {
  position: 'absolute',
  top: 90,
  right: 10,
  borderRadius: 8,
  borderWidth: 0.5,
  padding: 12,
  width: '50%',
  backgroundColor: '#fff',
  borderColor: '#ccc',
  zIndex: 1000,
  elevation: 10,
},

  dropdownItem: {
    paddingVertical: 6,
    fontSize: 16,
  },
});
