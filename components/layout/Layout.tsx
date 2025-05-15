import React, { ReactNode } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavBar } from './Nav';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      {/* Fixed Top Navigation */}
      <NavBar />

      {/* Scrollable Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {children}
     

      {/* Fixed Bottom Footer */}
      <Footer />
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30
  },
  content: {
    flexGrow: 1,
    
    
  },
});
