import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100x100.png?text=iMigrateEMC' }}
            style={styles.logo}
            resizeMode="cover"
          />
          <Text style={styles.title}>iMigrateEMC</Text>
          <Text style={styles.subtitle}>Your Migration Partner</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.sectionText}>
            iMigrateEMC is your trusted partner for all migration matters.
            From visa consultation to document preparation, we provide tailored solutions.
          </Text>
        </View>

        {/* Featured Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Services</Text>

          <View style={styles.cardContainer}>
            <ServiceCard
              title="Visa Consultation"
              description="Expert guidance for student, skilled, and partner visas."
            />
            <ServiceCard
              title="Document Assistance"
              description="Help with document collection, verification, and submission."
            />
          </View>
        </View>

        {/* News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          <Text style={styles.newsItem}>• New visa subclass guidelines released</Text>
          <Text style={styles.newsItem}>• Free migration webinar next week</Text>
          <Text style={styles.newsItem}>• New branch opened in Melbourne</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type CardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<CardProps> = ({ title, description }) => (
  <TouchableOpacity activeOpacity={0.85} style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>{description}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80002a',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#f5f5f5',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#80002a',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#80002a',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#555',
  },
  newsItem: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
});
