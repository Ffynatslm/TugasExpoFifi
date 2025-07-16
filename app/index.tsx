import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageBaseSize = (screenWidth - 260) / 3; // 3 kolom

// GAMBAR KUSTOM SAYA
const generateImagePairs = () => {
  const main = [
    'https://i.pinimg.com/1200x/f2/33/5a/f2335a8af43eb226ec6d00fe1266b350.jpg',
    'https://i.pinimg.com/1200x/e1/01/91/e10191fdcdb9ebe13d22aa2622f88cc5.jpg',
    'https://i.pinimg.com/736x/8c/ac/3f/8cac3fa71dabf2515d15166843b805ce.jpg',
    'https://i.pinimg.com/736x/12/c3/2b/12c32b9ef302b2435547170da3959ecb.jpg',
    'https://i.pinimg.com/1200x/c2/b2/86/c2b28660ae2cfb842ea1a23236c12774.jpg',
    'https://i.pinimg.com/736x/e3/8b/56/e38b5682b77892a348466c70d3e727fd.jpg',
    'https://i.pinimg.com/736x/a8/e4/ff/a8e4ff39befc09460cb546207fc5bdb6.jpg',
    'https://i.pinimg.com/1200x/cb/1e/16/cb1e163bbcd28c45ca54f1ef0764d817.jpg',
    'https://i.pinimg.com/736x/55/2e/eb/552eebeb8af18a7f5b05aa5701f79bee.jpg',
  ];

  const alt = [
    'https://i.pinimg.com/736x/bd/66/94/bd6694b312091fa4333aa90e089fb55a.jpg',
    'https://i.pinimg.com/736x/d5/24/3a/d5243a0a5a2bc8a602feb76c5e032d31.jpg',
    'https://i.pinimg.com/736x/c4/09/21/c40921b147d2ce0646ec0c876243f5dd.jpg',
    'https://i.pinimg.com/1200x/5d/19/67/5d1967530adb04f7473336156dd8d022.jpg',
    'https://i.pinimg.com/736x/6f/d2/de/6fd2de9bffdddd30ad7641b8006a1512.jpg',
    'https://i.pinimg.com/1200x/a2/7e/7e/a27e7edc0e67804fbd211230c3b024a2.jpg',
    'https://i.pinimg.com/736x/5a/4e/25/5a4e25f953bc6ecf7b4ade1289b2e269.jpg',
    'https://i.pinimg.com/736x/87/d3/3f/87d33fc7c647fcf871c9b2b4989a238c.jpg',
    'https://i.pinimg.com/736x/aa/1c/9f/aa1c9fc297898338996fe0dea3c58c27.jpg',
  ];

  return main.map((mainImage, i) => ({
    mainImage,
    altImage: alt[i],
  }));
};

const imagePairs = generateImagePairs();

export default function GridGambarCustom() {
  const [imageStates, setImageStates] = useState(
    imagePairs.map(() => ({ zoom: 1, showAlt: false }))
  );

  const handlePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((img, i) => {
        if (i !== index) return img;

        const nextZoom = img.zoom >= 2 ? 1 : img.zoom + 0.2;

        return {
          zoom: nextZoom,
          showAlt: !img.showAlt,
        };
      })
    );
  };

  return (
    <ScrollView style={styles.wrapper}>
      {/* Profil Pengguna */}
      <View style={styles.profileContainer}>
        <View style={styles.triangle} />
        <View style={styles.nameBox}><Text style={styles.nameText}>Fifiyana</Text></View>
        <View style={styles.nimBox}><Text style={styles.nimText}>105841104522</Text></View>
        <View style={styles.circle} />
      </View>

      {/* Grid Gambar */}
      <View style={styles.grid}>
        {imagePairs.map((pair, idx) => {
          const { zoom, showAlt } = imageStates[idx];
          return (
            <Pressable key={idx} onPress={() => handlePress(idx)}>
              <Image
                source={{ uri: showAlt ? pair.altImage : pair.mainImage }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: zoom }],
                  },
                ]}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#f8f8f8' },

  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange',
    marginBottom: 15,
  },
  nameBox: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  nimBox: {
    backgroundColor: 'pink',
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 25,
    marginBottom: 15,
  },
  nimText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: 'cyan',
    borderRadius: 30,
    marginBottom: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  image: {
    width: imageBaseSize,
    height: imageBaseSize,
    marginBottom: 12,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
