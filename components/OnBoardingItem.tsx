import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Text } from "./Themed";
import { styles } from "@/style/style";

type OnBoard = {
  image: ImageSourcePropType;
  title: string;
  desc: string;
};

const OnBoardingItem = ({ item }: { item: OnBoard }) => {
  return (
    <View className=' w-screen flex justify-between items-center'>
      <View className='flex w-screen gap-3 text-white items-center'>
        <Text className="text-[70px] text-center font-bold shadow-lg" style={styles.title}>{item.title}</Text>
        <Text className='w-[90%] mb-[30%] text-center' style={styles.desc}>
          {item.desc}
        </Text>
        <Image className="w-full" source={item.image} />
      </View>
    </View>
  );
};

export default OnBoardingItem;
