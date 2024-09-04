import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeIcon from "@/components/navigation/HomeIcon";
import SearchIcon from "@/components/navigation/SearchIcon";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.tabIconSelected,
          tabBarInactiveTintColor: Colors.tabIconDefault,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.accent,
            height: 72,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontFamily: "Poppins",
            fontSize: 16,
            lineHeight: 24,
            paddingBottom: 6,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
