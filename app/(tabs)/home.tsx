import React from "react";
import { FlatList, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavBar from "@/components/NavBar";
import { useThemeColor } from "@/components/Themed";

const Main = () => {
  const handlePress = () => {
    // Handle press action
  };
  const bg = useThemeColor("background");
  const styles = StyleSheet.create({
    container: {
      paddingBottom: 18,
      backgroundColor: bg,
    },
    story: {
      // backgroundColor: "red",
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ScrollView style={styles.container}>
          <NavBar />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
