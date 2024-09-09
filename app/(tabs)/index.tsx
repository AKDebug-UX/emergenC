import { Image, StyleSheet, Platform, View, Text } from 'react-native';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
//import { ThemedText } from '@/components/ThemedText';
//import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <div>
            <Text>emergenC</Text>
            <Text>An emergency hotline app</Text>
        </div>
        <button>Get Started</button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundImage: 'linear-gradient(#d6403d, #ff8381)',
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
    }
});
