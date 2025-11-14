import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
// import {MaterialIcons} from '@expo/vector-icons/';

import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#071531",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          backgroundColor: "#F8FAFC",
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="job"
        options={{
          title: "Job",
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag-handle" size={size} color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="gpp-good" size={size} color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
