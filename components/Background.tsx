import { LinearGradient } from "expo-linear-gradient";
import React from "react";
// import { Text, View } from "@/components/Themed";
import { Text, View } from "react-native";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className='flex-1'>
      <LinearGradient
        // Background Linear Gradient
        colors={["#D34949", "#D34949", "#D34949", "#FFFFFF"]}
        locations={[0, 0.25, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className='flex-1 relative flex-col justify-center items-center '
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default Background;
