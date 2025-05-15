import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

export function NavBar() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <ThemedView style={[styles.navBarContainer, { backgroundColor: theme.text }]}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')} style={styles.logo} />
      </View>

      {/* Hamburger Icon */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerIcon}>
        <Entypo name="menu" size={30} color={theme.background} />
      </TouchableOpacity>

      {/* Sidebar */}
      {sidebarOpen && (
        <View style={[styles.sidebar, { backgroundColor: theme.text }]}>
        
          <Image source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')} style={styles.logobox} />
          <Link href="/ProductPage" style={[styles.sidebarText, { color: theme.background, borderBottomColor: theme.border }]} asChild>
          <ThemedText type="default" >
            Products
          </ThemedText>
          </Link>

          {/* Image frame between Products and Pending Orders */}
          <Image
            source={require('@/assets/images/Frame 1321317696.png')} // Replace with your actual image
            style={[styles.imageFrame, { zIndex: -1 }]} // Image placed under text
          />

          <ThemedText type="default" style={[styles.sidebarText, { color: theme.background, borderBottomColor: theme.border }]}>
            Pending Orders
          </ThemedText>

          <ThemedText type="default" style={[styles.sidebarText, { color: theme.background, borderBottomColor: theme.border }]}>
            Messages
          </ThemedText>

          {/* Store Dropdown */}
          <View  style={[ styles.sidebarText,  {borderBottomColor: theme.border} ]}>
          <TouchableOpacity onPress={toggleDropdown} style={[styles.storeButton  ]}>
            <ThemedText type="default" style={[{ color: theme.background, }]}>
              Stores
            </ThemedText>
            <Entypo name={dropdownOpen ? 'chevron-up' : 'chevron-down'} size={20} color={theme.background} />
          </TouchableOpacity>

          {dropdownOpen && (
            <View style={styles.dropdownContainer}>
              <TouchableOpacity style={styles.dropdownItem}>
                <ThemedText type="default" style={{ color: theme.background }}>
                  Restaurant
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <ThemedText type="default" style={{ color: theme.background }}>
                  Pharmacy
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <ThemedText type="default" style={{ color: theme.background }}>
                  Lounge
                </ThemedText>
              </TouchableOpacity>
            </View>
          )}
          </View>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  logoContainer: {
    flex: 1,
  },
  logobox:{
  width: 39,
    height: 39,
    marginVertical:40
  },
  logo: {
    width: 43,
    height: 43,
  },
  hamburgerIcon: {
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    top: '100%',
    right: 0,
    width: '75%',
    height: 1000,
    padding: 40,
    borderRightWidth: 1,
    zIndex: 10,
  },
  sidebarText: {
    paddingVertical: 30,
    borderBottomWidth: 0.7,
    zIndex: 10,
  },
  imageFrame: {
    width: 221,
    height: 226, // Set the height of the image frame
    marginVertical: 20, // Add some space around the image frame
    position: 'absolute', // To make it overlay under the items
    top: 60,
    left:'30%',
    zIndex: -1, // Set the image behind the text
  },
  dropdownContainer: {
   
    paddingVertical: 10,
  },
  dropdownItem: {
    paddingVertical: 15,
  },
  storeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:8
  },
});
