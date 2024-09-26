import React                            from 'react';
import { View, StyleSheet, ImageProps } from 'react-native';
import MapView, { Marker }              from 'react-native-maps';
import CustomInputComponent             from '../components/common /CustomInputComponent';
import CurrentPositionIcon              from '@/assets/icons/CurrentPositionIcon';
import NotificationsIcon                from '@/assets/icons/NotificationsIcon';
import FilterIcon                       from '@/assets/icons/FilterIcon';
import ProfileAvatarComponent           from '../components/common /ProfileAvatarComponent';
import DropdownComponent                from '../components/DropdownComponent';
import NavBarComponent                  from '../components/common /NavBarComponent';

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

const people: People[] = [
  { id: 1, name: 'Ana', mode: 'fire', touched: false, touchMatch: false, image: require('../../assets/images/image.png'), latitude: 39.4676562, longitude: -0.3924242 },
  { id: 2, name: 'Ben', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image1.png'), latitude: 39.4496562, longitude: -0.3954242 },
  { id: 3, name: 'Carla', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image2.png'), latitude: 39.4426562, longitude: -0.3984242 },
  { id: 4, name: 'David', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image3.png'), latitude: 39.4376562, longitude: -0.3714242 },
  { id: 5, name: 'Eva', mode: 'fire', touched: true, touchMatch: false, image: require('../../assets/images/image4.png'), latitude: 39.4626562, longitude: -0.4034242 },
  { id: 6, name: 'Franco', mode: 'heart', touched: false, touchMatch: false, image: require('../../assets/images/image5.png'), latitude: 39.436562, longitude: -0.4054242 },
  { id: 7, name: 'Gina', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image5.png'), latitude: 39.456562, longitude: -0.3774242 }
];

const NearMeScreen = () => {
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
        <View style={styles.inputContainer}>
          <CustomInputComponent 
            leftIcon={<CurrentPositionIcon />}
            rightIcon={<FilterIcon />}
          />
          <NotificationsIcon />
        </View>
        <View>
          <DropdownComponent />
        </View>
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
    gap: 8,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  navBarContainer: {
    bottom: 100,
    flex:1
  }
});

export default NearMeScreen;
