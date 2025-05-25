import React from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const services = [
  {
    id: "1",
    title: "Data Migration",
    description:
      "End-to-end data migration services with minimal disruption to your business operations.",
    icon: "server-outline",
  },
  {
    id: "2",
    title: "EMC Storage Solutions",
    description:
      "Specialized solutions for EMC storage systems including assessment, planning, and implementation.",
    icon: "hardware-chip-outline",
  },
  {
    id: "3",
    title: "Cloud Integration",
    description:
      "Seamless integration with leading cloud platforms for enhanced data accessibility and management.",
    icon: "cloud-outline",
  },
  {
    id: "4",
    title: "Disaster Recovery",
    description:
      "Comprehensive disaster recovery planning and implementation to protect your critical data.",
    icon: "shield-checkmark-outline",
  },
  {
    id: "5",
    title: "Consulting Services",
    description:
      "Expert advice on data management strategies, technology selection, and implementation roadmaps.",
    icon: "people-outline",
  },
  {
    id: "6",
    title: "Training & Support",
    description:
      "Hands-on training and ongoing support to ensure your team can effectively manage your data infrastructure.",
    icon: "school-outline",
  },
]

const visaCategories = [
  { id: "1", title: "Student Visa", icon: "school-outline" },
  { id: "2", title: "Visit Visa", icon: "earth-outline" },
  { id: "3", title: "Work/Immigration Visa", icon: "business-outline" },
]

export default function ServicesScreen() {
  const renderVisaCategory: ListRenderItem<typeof visaCategories[0]> = ({
    item,
  }) => (
    <View style={styles.visaCard}>
      <Ionicons name={item.icon as any} size={30} color="#8B4513" />
      <Text style={styles.visaText}>{item.title}</Text>
    </View>
  )

  const renderServiceItem: ListRenderItem<typeof services[0]> = ({ item }) => (
    <View style={styles.serviceCard}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon as any} size={30} color="#8B4513" />
      </View>
      <View style={styles.serviceContent}>
        <Text style={styles.serviceTitle}>{item.title}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Comprehensive migration solutions tailored to your needs
        </Text>
      </View>

      {/* Visa Categories Section */}
      <View style={styles.visaSection}>
        
        <FlatList
          data={visaCategories}
          renderItem={renderVisaCategory}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.visaRow}
          scrollEnabled={false}
        />
      </View>

      {/* Services List */}
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  )
}

const screenWidth = Dimensions.get("window").width
const visaCardWidth = (screenWidth - 45) / 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf6", // light warm background
  },
  header: {
    padding: 20,
    backgroundColor: "#f5ede3", // soft beige tone
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a3f35", // dark brown text
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b5e55", // soft brown-gray
    marginTop: 5,
  },
  visaSection: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  visaHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a3f35",
    marginBottom: 10,
  },
  visaRow: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  visaCard: {
    width: visaCardWidth,
    backgroundColor: "#fffdf9",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#e0d8ce",
  },
  visaText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#4a3f35",
    textAlign: "center",
  },
  listContainer: {
    padding: 15,
  },
  serviceCard: {
    flexDirection: "row",
    backgroundColor: "#fffdf9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e0d8ce",
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceContent: {
    flex: 1,
    paddingLeft: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513", // accent brown
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#6b5e55",
    lineHeight: 20,
  },
})

