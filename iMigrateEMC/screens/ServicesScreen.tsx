import { StyleSheet, Text, View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const services = [
  {
    id: "1",
    title: "Data Migration",
    description: "End-to-end data migration services with minimal disruption to your business operations.",
    icon: "server-outline",
  },
  {
    id: "2",
    title: "EMC Storage Solutions",
    description: "Specialized solutions for EMC storage systems including assessment, planning, and implementation.",
    icon: "hardware-chip-outline",
  },
  {
    id: "3",
    title: "Cloud Integration",
    description: "Seamless integration with leading cloud platforms for enhanced data accessibility and management.",
    icon: "cloud-outline",
  },
  {
    id: "4",
    title: "Disaster Recovery",
    description: "Comprehensive disaster recovery planning and implementation to protect your critical data.",
    icon: "shield-checkmark-outline",
  },
  {
    id: "5",
    title: "Consulting Services",
    description: "Expert advice on data management strategies, technology selection, and implementation roadmaps.",
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

export default function ServicesScreen() {
  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceCard}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={30} color="#0066cc" />
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
        <Text style={styles.headerSubtitle}>Comprehensive migration solutions tailored to your needs</Text>
      </View>
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  listContainer: {
    padding: 15,
  },
  serviceCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    color: "#0066cc",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
})
