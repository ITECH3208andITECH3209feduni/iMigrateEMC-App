"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

export default function ContactScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    Alert.alert("Form Submitted", "Thank you for contacting us. We'll get back to you shortly.", [{ text: "OK" }])

    // Clear form
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>Get in touch with our migration experts</Text>
        </View>

        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={24} color="#0066cc" />
            <Text style={styles.contactText}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={24} color="#0066cc" />
            <Text style={styles.contactText}>info@imigrateemc.com</Text>
          </View>

          <View style={styles.contactItem}>
            <Ionicons name="location-outline" size={24} color="#0066cc" />
            <Text style={styles.contactText}>123 Tech Plaza, Suite 400, San Francisco, CA 94105</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Send us a message</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Your name" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Your email address"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Your phone number"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              placeholder="How can we help you?"
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.officeHours}>
          <Text style={styles.officeHoursTitle}>Office Hours</Text>
          <Text style={styles.officeHoursText}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
          <Text style={styles.officeHoursText}>Saturday: 10:00 AM - 2:00 PM</Text>
          <Text style={styles.officeHoursText}>Sunday: Closed</Text>
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
  contactInfo: {
    backgroundColor: "white",
    margin: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },
  formContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#0066cc",
    borderRadius: 4,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  officeHours: {
    margin: 20,
    marginTop: 0,
    padding: 15,
    backgroundColor: "#f0f4f8",
    borderRadius: 8,
  },
  officeHoursTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  officeHoursText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
})
