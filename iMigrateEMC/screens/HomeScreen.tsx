import { StyleSheet, Text, View, Image, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: "https://via.placeholder.com/150?text=iMigrateEMC" }} style={styles.logo} />
          <Text style={styles.title}>iMigrateEMC</Text>
          <Text style={styles.subtitle}>Your Migration Partner</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.sectionText}>
            iMigrateEMC is your trusted partner for all your data migration needs. We specialize in EMC migrations and
            provide comprehensive solutions to ensure a smooth transition for your business.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Services</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Data Migration</Text>
            <Text style={styles.cardText}>Comprehensive data migration services with minimal downtime.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cloud Integration</Text>
            <Text style={styles.cardText}>Seamless integration with cloud platforms for enhanced accessibility.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          <Text style={styles.newsItem}>• New migration tools available for enterprise clients</Text>
          <Text style={styles.newsItem}>• Upcoming webinar: Best practices for EMC migrations</Text>
          <Text style={styles.newsItem}>• Case study: Successful migration for Fortune 500 company</Text>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0066cc",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0066cc",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
  newsItem: {
    fontSize: 14,
    marginBottom: 8,
    color: "#555",
  },
})
