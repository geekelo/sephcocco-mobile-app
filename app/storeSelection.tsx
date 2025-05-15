import { Image } from 'expo-image';
import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function StoreSelectionScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const options = [
    { title: 'Go to Pharmacy', icon: 'pharmacy.fill', href: '/pharmacy' },
    { title: 'Go to Restaurant', icon: 'restaurant.fill', href: '/restaurant' },
    { title: 'Go to Lounge', icon: 'lounge.fill', href: '/lounge' },
  ];

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')}
          style={styles.logo}
        />
      </View>
      <ThemedText type="title" style={[styles.headerText, { color: theme.text }]}>
        Welcome to Sephcocco Outlet
      </ThemedText>

      <View style={styles.options}>
        {options.map((item, index) => (
          <Pressable
            key={index}
            style={[styles.optionButton, { borderColor: theme.orange}]}
            onPress={() => router.push(item.href as any)}>
            <IconSymbol name={item.icon as any} size={22} color={theme.gray} />
            <Text style={[styles.optionTitle, { color: theme.text }]}>
              {item.title}
            </Text>
            <IconSymbol name="arrow.right" size={24} color={theme.text} />
          </Pressable>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 60,
    gap: 30,
  },
  imageWrapper: {
    alignItems: 'flex-start',
  },
  logo: {
    height: 67,
    width: 64,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'PTSerif-Regular',
  },
  options: {
    gap: 36,
    margin:30
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderRadius: 6,
    padding: 15,
    justifyContent: 'center',
    
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: 'PTSerif-Regular',
    flex: 1,
    marginLeft: 12,
    fontWeight:500
  },
});
