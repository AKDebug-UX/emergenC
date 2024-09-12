import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/components/Themed";

const Main = () => {
  const handlePress = () => {
    // Handle press action for emergency
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  const bg = useThemeColor("background");

  const styles = StyleSheet.create({
    container: {
      paddingBottom: 18,
      backgroundColor: bg,
      gap: 50,
    },
    emergencyButton: {
      backgroundColor: 'red',
      borderRadius: 100, // Makes the button circular
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 30,
    },
    buttonIcon: {
      fontSize: 50,
      color: 'white',
    },
    cancelButton: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignSelf: 'center',
      borderColor: 'gray',
      borderWidth: 1,
    },
    cancelButtonText: {
      color: 'red',
      fontSize: 18,
      fontWeight: 'bold',
    },
    header: {
      fontSize: 30,
      color: "white",
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    subHeader: {
      fontSize: 20,
      color: "white",
      textAlign: 'center',
      marginTop: 30,
    }
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView style={styles.container}>
          {/* Header section */}
          <View className="flex flex-row bg-white px-6 py-4 justify-between items-center">
            <View>
              <Text className="text-[20px]">Welcome back,</Text>
              <Text className="text-[30px] font-bold">Akorede</Text>
            </View>
            <Image source={require("../../assets/images/profile.png")} />
          </View>

          {/* Emergency message section */}
          <View className="text-white">
            <Text style={styles.header}>Having an Emergency?</Text>
            <Text style={styles.subHeader}>
              Press the button below, help will arrive soon.
            </Text>
          </View>

          {/* Emergency button */}
          <TouchableOpacity onPress={handlePress} style={styles.emergencyButton}>
            <Text style={styles.buttonIcon}>🚨</Text>
          </TouchableOpacity>

          {/* Cancel button */}
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
