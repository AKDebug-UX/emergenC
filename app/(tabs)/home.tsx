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
      color: '#D34949',
      fontSize: 18,
      fontWeight: 'bold',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 70,
    },
    subHeader: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    }
  });

  return (
    <SafeAreaView>
      <View className="flex flex-col w-full items-center justify-center">
        {/* Header section */}
        <View className="flex flex-row w-full bg-white px-6 py-4 justify-between items-center">
          <View>
            <Text className="text-[20px]">Welcome back,</Text>
            <Text className="text-[30px] font-bold">Akorede</Text>
          </View>
          <Image source={require("../../assets/images/profile.png")} />
        </View>

        {/* Emergency message section */}
        <View className="">
          <Text style={styles.header}>Having an Emergency?</Text>
          <Text style={styles.subHeader}>
            Press the button below, help will arrive soon.
          </Text>
        </View>

        {/* Emergency button */}
        <View className="bg-[#D34949]/30 p-[7%] my-[20%] justify-center items-center rounded-full">
          <View className="bg-[#D34949]/20 p-[7%] justify-center items-center rounded-full">
            <TouchableOpacity onPress={handlePress} className="bg-[#D34949] w-[230px] h-[230px] justify-center items-center rounded-full">
              <Text style={styles.buttonIcon}>🚨</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cancel button */}
        <TouchableOpacity onPress={handleCancel} className="bg-white px-14 h-[50px] justify-center items-center rounded-md shadow-lg">
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
