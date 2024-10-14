import React                            from 'react';
import { View, StyleSheet, ImageProps } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE }              from 'react-native-maps';
import CustomInputComponent             from '../components/common /CustomInputComponent';
import CurrentPositionIcon              from '@/assets/icons/CurrentPositionIcon';
import NotificationsIcon                from '@/assets/icons/NotificationsIcon';
import FilterIcon                       from '@/assets/icons/FilterIcon';
import ProfileAvatarComponent           from '../components/common /ProfileAvatarComponent';
import DropdownComponent                from '../components/DropdownComponent';
import NavBarComponent                  from '../components/common /NavBarComponent';
import { LinearGradient }               from 'expo-linear-gradient';
import { NavigationProp, useNavigation }from '@react-navigation/native';
import { RootStackParams }              from '../types';

interface People {
  id: number;
  name: string;
  mode: 'fire' | 'heart';
  touched: boolean;
  touchMatch: boolean;
  image: ImageProps;
  latitude: number;
  longitude: number;
}

const gradientColors = [
  '#F6F6F6',
  'rgba(246, 246, 246, 0.00)'
];


const people: People[] = [
  { id: 1, name: 'Ana', mode: 'fire', touched: false, touchMatch: false, image: require('../../assets/images/image.png'), latitude: 39.4676562, longitude: -0.3924242 },
  { id: 2, name: 'Ben', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image1.png'), latitude: 39.4496562, longitude: -0.3954242 },
  { id: 3, name: 'Carla', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image2.png'), latitude: 39.4426562, longitude: -0.3984242 },
  { id: 4, name: 'David', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image3.png'), latitude: 39.4376562, longitude: -0.3714242 },
  { id: 5, name: 'Eva', mode: 'fire', touched: true, touchMatch: false, image: require('../../assets/images/image4.png'), latitude: 39.4626562, longitude: -0.4034242 },
  { id: 6, name: 'Franco', mode: 'heart', touched: false, touchMatch: false, image: require('../../assets/images/image5.png'), latitude: 39.436562, longitude: -0.4054242 },
  { id: 7, name: 'Gina', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image5.png'), latitude: 39.456562, longitude: -0.3774242 }
];

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

const NearMeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleRightIconPress = () => {
    navigation.navigate('FilterScreen')
  };
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.4616562,
          longitude: -0.3929242,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
      >
        {people.map((person) => {
          const borderColor = person.mode === 'fire' ? 'rgba(255, 193, 7, 0.2)' : 'rgba(220, 53, 69, 0.2)';
          const modeIcon = person.mode === 'fire' 
            ? require('../../assets/images/mode-fire-icon.png') 
            : require('../../assets/images/mode-heart-icon.png');
          const touchIcon = person.touched ? require('../../assets/images/touchIcon.png') : undefined;
          const matchIcon = person.touchMatch ? require('../../assets/images/match-touch-icon.png') : undefined;

          return (
            <Marker
              key={`person-${person.name}-${person.id}`}
              coordinate={{ latitude: person.latitude, longitude: person.longitude }}
              title={person.name}
            >
              <ProfileAvatarComponent
                borderColor={borderColor}
                profileImage={person.image}
                modeIcon={modeIcon}
                touchIcon={touchIcon}
                matchIcon={matchIcon}
              />
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.componentSection}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0.5, y: 0.2 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.background}
        />
        <View style={styles.inputContainer}>
          <View style={styles.customInputWrapper}>
            <CustomInputComponent 
              leftIcon={<CurrentPositionIcon />}
              rightIcon={<FilterIcon />}
              onRightIconPress={handleRightIconPress}
            />
          </View>
          <View style={styles.notificationIconContainer}>
            <NotificationsIcon />
          </View>
        </View>
        <DropdownComponent />
      </View>
      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  componentSection: {
    width: '100%',
    height: 193,
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    top: 0,
    gap: 8,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  customInputWrapper: {
    flex: 1,
  },
  notificationIconContainer: {
    width: 24, 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  navBarContainer: {
    bottom: 90,
    flex:1,
    paddingHorizontal: 24
  }
});

export default NearMeScreen;
