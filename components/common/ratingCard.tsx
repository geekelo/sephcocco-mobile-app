import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';

// rating: number from 0 to 5
export function StarRating({ rating }: { rating: number }) {
  const maxStars = 5;
  const filledStars = Math.round(rating); // round to nearest whole star

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
      {[...Array(maxStars)].map((_, index) => (
        <Entypo
          key={index}
          name={index < filledStars ? 'star' : 'star-outlined'}
          size={16}
          color="#FFAD3C" // gold star color
        />
      ))}
    </View>
  );
}
