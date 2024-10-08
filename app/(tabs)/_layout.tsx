import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// Import Active Icon Components
// import {LuLayoutGrid} from "react-icons/lu";
import HomeActive from "../../assets/icons/home_active.svg";
import ExploreActive from "../../assets/icons/explore_active.svg";
import FavActive from "../../assets/icons/fav_active.svg";
import ProfileActive from "../../assets/icons/profile_active.svg";
import Create from "../../assets/icons/create.svg";

// Import Non-Active Icon Components
import Home from "../../assets/icons/home.svg";
import Explore from "../../assets/icons/explore.svg";
import Fav from "../../assets/icons/fav.svg";
import Profile from "../../assets/icons/profile.svg";

import GradientText from "@/components/GradientText";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/style/stylesheet";
import { StatusBar } from "expo-status-bar";
import { useThemeColor } from "@/components/Themed";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({
  name,
  color,
  isActive,
}: {
  name: string;
  color: string;
  isActive: boolean;
}) {
  if (isActive) {
    switch (name) {
      case "home":
        return (
          <HomeActive
            width={actuatedNormalize(26)}
            height={actuatedNormalize(26)}
          />
        );
      case "contact":
        return (
          <ExploreActive
            width={actuatedNormalize(26)}
            height={actuatedNormalize(26)}
          />
        );
      case "menu":
        return (
          <FavActive />
        );
      case "profile":
        return (
          <ProfileActive
            width={actuatedNormalize(26)}
            height={actuatedNormalize(26)}
          />
        );
      default:
        return null;
    }
  } else {
    switch (name) {
      case "home":
        return (
          <Home width={actuatedNormalize(26)} height={actuatedNormalize(26)} />
        );
      case "contact":
        return (
          <Explore
            width={actuatedNormalize(26)}
            height={actuatedNormalize(26)}
          />
        );
      case "menu":
        return (
          <FavActive />
        );
      case "profile":
        return (
          <Profile
            width={actuatedNormalize(26)}
            height={actuatedNormalize(26)}
          />
        );
      default:
        return null;
    }
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#D34949",
          headerShown: useClientOnlyValue(false, !true),
          tabBarStyle: {
            backgroundColor: "#112022",
            height: actuatedNormalizeVertical(65),
            marginHorizontal: actuatedNormalizeVertical(-10),
            borderTopWidth: 0.5,
            borderTopColor: "#D34949",
          },
          tabBarIconStyle: { marginTop: actuatedNormalizeVertical(10) },
          tabBarLabelStyle: { marginBottom: actuatedNormalizeVertical(10) },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name='home' color={color} isActive={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <GradientText focused={focused} name='Home' />
            ),
            headerRight: () => (
              <Link href='/modal' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name='info-circle'
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name='contact'
          options={{
            title: "Contacts",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name='contact' color={color} isActive={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <GradientText focused={focused} name='Contacts' />
            ),
          }}
        />
        <Tabs.Screen
          name='menu'
          options={{
            title: "Menu",
            tabBarStyle: { display: "none" },
            tabBarIconStyle: {
              position: "absolute",
              top: actuatedNormalizeVertical(10),
              // marginBottom: actuatedNormalizeVertical(31),
            },
            tabBarIcon: ({ color, focused }) => (
              <Create
                width={actuatedNormalize(60)}
                height={actuatedNormalizeVertical(60)}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <GradientText focused={focused} name='' />
            ),
          }}
        />
        <Tabs.Screen
          name='favourites'
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name='favourites' color={color} isActive={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <GradientText focused={focused} name='Favourites' />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name='profile' color={color} isActive={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <GradientText focused={focused} name='Profile' />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        backgroundColor={useThemeColor("text")}
        animated
        style={"inverted"}
      // style={Platform.OS === "ios" ? "light" : "auto"}
      />
    </>
  );
}
