import { Image } from 'expo-image';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import InputField from '@/components/ui/InputField';
import CustomButton from '@/components/ui/CustomButton';
import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
export default function SigninScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
   
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('@/assets/images/SEPHCOCO LOUNGE 3.png')}
          style={styles.logo}
        />
      </View>
      <ThemedText type="subtitle"  style={{ color: theme.text, textAlign:'center' }}>Welcome Back!!</ThemedText>
      <View style={styles.form}>
        
        <InputField label="Email Address" placeholder="Enter Email Address"  />
       
        <InputField label=" Password" placeholder="Enter password" secureTextEntry />
        <CustomButton text="Sign In Now" onPress={() => {router.push('/Homepage')}} />
        <Text style={[styles.loginText, { color: theme.text }]}>
          Don’t have an account? <Link style={[styles.loginLink, { color: theme.success }]} href='/'>Sign up</Link> 
        </Text>
      </View>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    gap: 20,
    paddingVertical:60,
    
    
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logo: {
    height: 67,
    width: 64,
  },
  form: {
    flex: 1,
    gap: 10,
    paddingTop:40
  },
  loginText: {
    textAlign: 'center',
     fontFamily: 'PTSerif-Regular',
   
  },
  loginLink: {
    fontWeight: 'bold',
     fontFamily: 'PTSerif-Regular',
     textDecorationStyle:'dashed',
     textDecorationLine:'underline'
  },
});
