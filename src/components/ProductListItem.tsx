import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
interface ProductListItemProps {
  product: {
    id: number
    name: string
    image: string
    price: number
  }
}
export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
 
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    aspectRatio: 1
  }
});
