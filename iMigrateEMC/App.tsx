import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

// Screens
import HomeScreen from "./screens/HomeScreen"
import ServicesScreen from "./screens/ServicesScreen"
import ResourcesScreen from "./screens/ResourcesScreen"
import ContactScreen from "./screens/ContactScreen"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline"
              } else if (route.name === "Services") {
                iconName = focused ? "list" : "list-outline"
              } else if (route.name === "Resources") {
                iconName = focused ? "document-text" : "document-text-outline"
              } else if (route.name === "Contact") {
                iconName = focused ? "call" : "call-outline"
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#0066cc",
            tabBarInactiveTintColor: "gray",
            headerStyle: {
              backgroundColor: "#0066cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Services" component={ServicesScreen} />
          <Tab.Screen name="Resources" component={ResourcesScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
