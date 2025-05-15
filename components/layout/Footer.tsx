import React from 'react';
import { StyleSheet, Image, Pressable, View, useColorScheme } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';  // Reusable Icon component
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';


export default function Footer() {
 const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[styles.footerContainer, { backgroundColor: theme.text }]}>
      {/* Footer Image */}
      <ThemedView style={{backgroundColor:theme.text}}>
      <Image    source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')} style={styles.footerImage} />
      <ThemedText type='title'  style={[styles.headerText, { color: theme.background }]} fontFamily='RuslanDisplay-Regular' >Sephcoco Lounge</ThemedText>
</ThemedView>
      {/* Border Bottom */}
      <View style={[styles.borderBottom, { borderBottomColor: theme.gray }]} />

      {/* Footer Content */}
      <ThemedView style={[styles.footerContent, { backgroundColor: theme.text,  }]}>
        <View style={styles.leftColumn}>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Products</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Order</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Messages</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>FAQ</ThemedText>
        </View>

        <View style={styles.rightColumn}>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Restaurant</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Lounge</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' type="defaultSemiBold" style={[styles.heading, { color: theme.background }]}>Pharmacy</ThemedText>
        </View>
      </ThemedView>
  <View style={[styles.borderBottom, { borderBottomColor: theme.gray }]} />

      {/* 'Get to Know Us' Section */}
      <ThemedText fontFamily='Raleway-Regular' type="subtitle" style={[styles.subtitle, { color: theme.background }]}>Get to Know Us</ThemedText>

      {/* Social Media Icons */}
      <ThemedView style={[styles.socialIcons, {backgroundColor:theme.text}]}>
        <Pressable style={styles.icon}>
            <Entypo name="linkedin" size={30} color={theme.background} />
        
        </Pressable>
        <Pressable style={styles.icon}>
         <Entypo name="instagram" size={30} color={theme.background} />
        </Pressable>
        <Pressable style={styles.icon}>
         <Entypo name="twitter" size={30} color={theme.background} />
        </Pressable>
        <Pressable style={styles.icon}>
           <Entypo name="facebook" size={30} color={theme.background} />
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    padding: 50,
  },
  footerImage: {
    width: 100,
    height: 97,
    resizeMode: 'contain',
  },
  borderBottom: {
    borderBottomWidth: 0.6,
    marginVertical: 10,
    
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:20,
    alignItems:'center',
    paddingHorizontal:30
    
   
  },
  leftColumn: {
    flex: 1,
    gap:24
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
     gap:24
  },
  heading: {
    marginBottom: 10,
  },
  subtitle: {
    
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
   alignItems:'center',
    gap: 15,
    paddingTop:12
  },
  icon: {
    padding: 10,
  },
  headerText:{
fontWeight:400,
fontSize:20,
paddingVertical:14
  }
});
