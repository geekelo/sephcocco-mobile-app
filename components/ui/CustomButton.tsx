import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

interface Props {
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({ text, onPress }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.orange }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: theme.background }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6.4,
    alignItems: 'center',
    cursor:'pointer'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center',
     fontFamily: 'PTSerif-Regular',
  },
});

export default CustomButton;
