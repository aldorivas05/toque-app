import CameraPhotoProfileIcon from "@/assets/icons/CameraPhotoProfileIcon";
import EditPhotoCardIcon from "@/assets/icons/EditPhotoCardIcon";
import MorePhotoProfileIcon from "@/assets/icons/MorePhotoProfileIcon";
import React from "react";
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get('window');


interface Photo {
  id: number;
  image: any;
}

interface PhotoGridProfileContentProps {
  photos: Photo[]; 
}

const PhotoGridProfileContent: React.FC<PhotoGridProfileContentProps> = ({ photos }) => {

  const filledPhotos = [...photos, ...Array(6 - photos.length).fill(null)];

  return (
    <View style={styles.container}>
      {[0, 3].map((rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {filledPhotos.slice(rowIndex, rowIndex + 3).map((photo, index) => (
            <View key={photo?.id || `empty-${index}`} style={styles.photoCardContainer}>
              {photo ? (
                <View style={styles.photoCard}>
                  <Image
                    source={photo.image}
                    style={styles.photoImage}
                    resizeMode="cover"
                  />
                  <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                    <EditPhotoCardIcon />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.emptyPhotoCard}>
                  <View style={styles.cameraIconContainer}>
                    <CameraPhotoProfileIcon />
                  </View>
                  <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                    <MorePhotoProfileIcon />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  photoCardContainer: {
    width: (width - 64) / 3,
  },
  photoCard: {
    height: 160,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    position: 'relative',
    overflow: 'hidden',
  },
  emptyPhotoCard: {
    height: 160,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -14 }, { translateY: -14 }],
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoGridProfileContent;
