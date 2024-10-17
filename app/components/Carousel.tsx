import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  FlatList, 
  StyleSheet, 
  Dimensions,  
  NativeScrollEvent, 
  NativeSyntheticEvent, 
  ImageProps
} from 'react-native';
import ButtonComponent from './common /ButtonComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../types';



const { width } = Dimensions.get('window');

interface Slide {
  id: string;
  text: string;
  boldText: string;
  image: ImageProps;
}

const data: Slide[] = [
  {
    id: '1',
    text: 'Ya no hay excusas que valgan, si te gusta alguien ',
    boldText: 'disfruta cada momento.',
    image: require('../../assets/images/introImage1.png'),
  },
  {
    id: '2',
    text: 'En la disco, en la calle, en clase, en el metro y ',
    boldText: 'desde donde quieras.',
    image: require('../../assets/images/introImage2.png'),
  },
  {
    id: '3',
    text: 'Configura libremente la privacidad que quieras y ',
    boldText: 'mándale un toque.',
    image: require('../../assets/images/introImage3.png'),
  }
];

const Carousel: React.FC = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>
        {item.text} <Text style={styles.boldText}>{item.boldText}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={`carousel-item-${index}`}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator
            ]}
          />
        ))}
      </View>
      {currentIndex === data.length - 1 && (
        <View style={styles.buttonContainer}>
          <ButtonComponent 
            title="Empezar" 
            color="#B4002D"
            onPress={() => navigation.navigate('NearMeScreen')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: '#222',
    lineHeight: 24
  },
  boldText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#222',
    lineHeight: 24
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 20,
    position: 'absolute',
    bottom: 90,
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#B4002D',
  },
  inactiveIndicator: {
    backgroundColor: '#CCC',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
});

export default Carousel;
