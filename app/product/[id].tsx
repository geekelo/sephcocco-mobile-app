import { router, useLocalSearchParams } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  FlatList,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/components/layout/Layout';
import { SearchBar } from '@/components/common/SearchBar';
import { useState } from 'react';
import { productData } from '@/components/common/ProductData';
import CustomButton from '@/components/ui/CustomButton';
import { CustomOutlineButton } from '@/components/ui/CustomOutlineButton';
import { Card } from '@/components/common/ProductCard';
import { Entypo } from '@expo/vector-icons';
import { StarRating } from '@/components/common/ratingCard';

type SimilarProduct = {
  id: number;
  image: any;
  title: string;
  favorites: number;
  amount: string;
  stock: number;
};

type Product = {
  id: number;
  image: any;
  subImages: any[];
  title: string;
  favorites: number;
  amount: string;
  stock: number;
  description: string;
  discount: number;
  similar: SimilarProduct[];
} | undefined;

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 2;

  // Assuming productData is imported and available
  const product: Product = productData.find((p) => p.id === Number(id));

  const totalPages = product?.similar ? Math.ceil(product.similar.length / itemsPerPage) : 0;

  const pagedSimilar = product?.similar
    ? product.similar.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  if (!product) {
    return (
      <Layout>
        <ThemedText style={{ padding: 20, color: 'red' }}>
          Product not found.
        </ThemedText>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchBar onFilterToggle={toggleFilter} filterOpen={filterOpen} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Main Image */}
        <Image source={product.image} style={styles.images} />

        {/* Sub Images */}
      <View style={styles.subImageContainer}>
  {product.subImages.map((img, idx) => (
    <Image key={idx} source={img} style={styles.subImage} />
  ))}
</View>


        <ThemedText fontFamily='Raleway-Regular' style={styles.title}>{product.title}</ThemedText>
          <ThemedText fontFamily='Raleway-Regular' style={styles.stock}>In stock: {product.stock} items</ThemedText>
       <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 }}>
  <StarRating rating={Math.min(5, product.favorites / 10)} />
  <ThemedText >({product.favorites} )</ThemedText>
</View>

        <ThemedText style={styles.amount}>{product.amount}</ThemedText>
       
        <ThemedView>
        <ThemedText fontFamily='Raleway-Regular'  style={styles.descriptionheader}>Product Description</ThemedText>
        <ThemedText fontFamily='Raleway-Regular'  style={styles.description}>{product.description}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.btns}>
<CustomButton onPress={() => {}} text='Place an Order' />
      <CustomOutlineButton
      title="Make Enqiuries"
      color={theme.orange}  // orange color (optional)
      onPress={() => alert('Button pressed!')}
       style={styles.bottomOutlineButton}
    />
    </ThemedView>
        {/* Similar Products */}
       {product.similar?.length > 0 && (
  <View style={styles.similarContainer}>
    <View style={styles.similarHeader}>
      <ThemedText style={styles.similarTitle}>Similar Products</ThemedText>
      <View style={styles.paginationContainer}>
         <View
  style={[
    styles.iconWrapper,
    currentPage === totalPages - 1 && styles.disabledIconWrapper,
    {backgroundColor:'#FFEDE6'}
  ]}
>
    <Entypo
          name="chevron-left"
          size={17}
          color={currentPage === 0 ? '#FF8754' : theme.orange}
          onPress={handlePrevPage}
         
        />
 
</View>
       
       
      <View
  style={[
    styles.iconWrapper,
    currentPage === totalPages - 1 && styles.disabledIconWrapper,
    {backgroundColor:'#FF4C00'}
  ]}
>
  <Entypo
    name="chevron-right"
    size={17}
    color={currentPage === totalPages - 1 ? '#fff' : '#fff'}
    onPress={handleNextPage}
  />
</View>

      </View>
    </View>

    <FlatList
      data={pagedSimilar}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // 2 columns grid
      columnWrapperStyle={styles.gridContainer}
      renderItem={({ item }) => (
        <ThemedView style={styles.cardWrapper}>
        <Card
          image={item.image}
          title={item.title}
          favorites={item.favorites}
          amount={item.amount}
          stock={item.stock}
          onPress={() => router.push({ pathname: '/product/[id]', params: { id: String(item.id) } })}
        
        />
        </ThemedView>
      )}
      scrollEnabled={false} // disable internal scroll inside ScrollView
    />
  </View>
)}

<CustomOutlineButton
  title="Have any Questions? Send us a message"
  color={theme.orange}
  onPress={() => alert('Button pressed!')}
  style={styles.bottomOutlineButton}
/>


       
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 100,
    gap:8
  },
  subImageContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 20,
},

subImage: {
  width: '23%',  // ~ (100% - 3*gap(4%)) / 4 = about 23%
  aspectRatio: 1, // square images
  borderRadius: 10,
  resizeMode: 'contain',
  marginBottom: 10,
},

 images:{
    aspectRatio:1
 } ,
  title: {
    fontSize: 27,
    fontWeight: 600,
    marginBottom: 6,
  },
  amount: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 6,
  },
  discount: {
    fontSize: 14,
    color: 'green',
    marginBottom: 6,
  },
  stock: {
    fontSize: 15,
    marginBottom: 4,
    fontWeight:600
  },
  rating: {
    fontSize: 13,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  similarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  similarImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  similarText: {
    fontSize: 14,
  },
  descriptionheader:{
    fontSize:15,
    textDecorationLine:'underline',
    fontWeight:600,
    paddingBottom:6
  },
  

  similarContainer: {
    marginTop: 30,
  },

  similarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  marginTop:30
  },

  similarTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconWrapper: {
  width: 20,       // control the width & height of the circle
  height: 20,
  borderRadius: 10,  // half of width/height for perfect circle
  backgroundColor: '#FF4C00',
  justifyContent: 'center',
  alignItems: 'center',
  // add margin or padding if needed
},

disabledIconWrapper: {
  backgroundColor: 'gray',
  opacity: 0.6,
},

  icon: {
    padding: 5,
    width:17,
    height:17,
    borderRadius:200, 
    display:'flex', 
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },

  disabledIcon: {
    padding: 5,
    opacity: 0.4,
  },

  pageIndicator: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 5,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  similarCard: {
    flex: 1,
    marginHorizontal: 5,
  },

  bottomOutlineButton: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical:40
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 60,
  },
  btns:{
    display:'flex',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    gap:4
  }
});
