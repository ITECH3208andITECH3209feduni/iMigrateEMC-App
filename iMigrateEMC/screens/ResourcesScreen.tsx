import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Resources</Text>
          <Text style={styles.headerSubtitle}>Helpful information and tools for your migration journey</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guides & Whitepapers</Text>

          <TouchableOpacity style={styles.resourceItem}>
            <Ionicons name="document-text-outline" size={24} color="#0066cc" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>EMC Migration Best Practices</Text>
              <Text style={styles.resourceDescription}>
                A comprehensive guide to planning and executing successful EMC migrations.
              </Text>
            </View>
            <Ionicons name="download-outline" size={24} color="#0066cc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceItem}>
            <Ionicons name="document-text-outline" size={24} color="#0066cc" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Cloud Migration Checklist</Text>
              <Text style={styles.resourceDescription}>
                Essential steps to ensure a smooth transition to cloud storage.
              </Text>
            </View>
            <Ionicons name="download-outline" size={24} color="#0066cc" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Case Studies</Text>

          <TouchableOpacity style={styles.resourceItem}>
            <Ionicons name="business-outline" size={24} color="#0066cc" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Financial Services Firm</Text>
              <Text style={styles.resourceDescription}>
                How we helped a major financial institution migrate 5PB of data with zero downtime.
              </Text>
            </View>
            <Ionicons name="arrow-forward-outline" size={24} color="#0066cc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceItem}>
            <Ionicons name="business-outline" size={24} color="#0066cc" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Healthcare Provider</Text>
              <Text style={styles.resourceDescription}>
                Secure migration of sensitive patient data to a hybrid cloud environment.
              </Text>
            </View>
            <Ionicons name="arrow-forward-outline" size={24} color="#0066cc" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Webinars & Events</Text>

          <View style={styles.eventCard}>
            <Text style={styles.eventDate}>May 25, 2025</Text>
            <Text style={styles.eventTitle}>EMC Migration Masterclass</Text>
            <Text style={styles.eventDescription}>
              Join our experts for a deep dive into advanced EMC migration techniques.
            </Text>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventCard}>
            <Text style={styles.eventDate}>June 10, 2025</Text>
            <Text style={styles.eventTitle}>Cloud Storage Solutions</Text>
            <Text style={styles.eventDescription}>
              Explore the latest cloud storage options and migration strategies.
            </Text>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
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
  resourceContent: {
    flex: 1,
    paddingHorizontal: 15,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  resourceDescription: {
    fontSize: 14,
    color: "#666",
  },
  eventCard: {
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
  eventDate: {
    fontSize: 14,
    color: "#0066cc",
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: "#0066cc",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
})
