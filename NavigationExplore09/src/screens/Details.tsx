import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route }: DetailsProps) => {
  const { product } = route.params;

  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.image}
        />

        <View>
          <Text style={styles.name}>{product.name}</Text>

          {/* Rating Container */}
          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating}★</Text>
            </View>

            <Text style={styles.ratingCount}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>

          {/* Pricing Container */}
          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
              Rs. {product.originalPrice.toLocaleString()}
            </Text>

            <Text style={styles.discountPrice}>
              Rs. {product.discountPrice.toLocaleString()}
            </Text>

            <Text style={styles.offerPercentage}>
              %{product.offerPercentage} off
            </Text>
          </View>

          {/* Tags Container */}
          <Text>{product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagBadge}>
                {tag}
              </Text>
            </View>
          ))}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    marginBottom: 4,

    fontSize: 20,
    fontWeight: '500',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,

    marginBottom: 12,

    borderRadius: 6,
    backgroundColor: '#defkfeb',
  },
  rating: {
    marginRight: 4,

    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',

    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.5)',

    color: 'rgba(0, 0, 0, 0.8)',
  },
})