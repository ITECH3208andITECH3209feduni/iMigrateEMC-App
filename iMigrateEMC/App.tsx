import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Screens (Update these paths if your files are in a subfolder)
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen"; // Used for Visa Category
import ResourcesScreen from "./screens/ResourcesScreen"; // Used for Appointment
import ContactScreen from "./screens/ContactScreen"; // Used for About Us

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Visa Category") {
                iconName = focused ? "document" : "document-outline";
              } else if (route.name === "Appointment") {
                iconName = focused ? "calendar" : "calendar-outline";
              } else if (route.name === "About Us") {
                iconName = focused ? "information-circle" : "information-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#80002a", // Maroon active color
            tabBarInactiveTintColor: "gray",
            headerStyle: {
              backgroundColor: "#80002a",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarStyle: {
              paddingBottom: 5,
              paddingTop: 5,
              height: 60,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Visa Category" component={ServicesScreen} />
          <Tab.Screen name="Appointment" component={ResourcesScreen} />
          <Tab.Screen name="About Us" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
