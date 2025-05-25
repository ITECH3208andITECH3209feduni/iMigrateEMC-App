import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_IN_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Generate time blocks every 15 minutes from 9:00 AM to 5:00 PM
const generateTimeBlocks = () => {
  const blocks = [];
  // Business hours: 9:00 to 17:00 (5 PM)
  for (let h = 9; h <= 17; h++) {
    for (let m = 0; m < 60; m += 15) {
      // Exclude 17:15 and later — last block is exactly 17:00
      if (h === 17 && m > 0) continue;
      blocks.push({ hour: h, minute: m });
    }
  }
  return blocks;
};

const timeBlocks = generateTimeBlocks();

export default function ResourcesScreen() {
  const now = new Date();

  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(now.getDate());

  const [selectedTime, setSelectedTime] = useState<{ hour: number; minute: number } | null>(null);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstWeekdayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    let newYear = selectedYear;
    let newMonth = selectedMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    if (newYear < now.getFullYear() || (newYear === now.getFullYear() && newMonth < now.getMonth())) {
      return;
    }
    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
    setSelectedDate(1);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    let newYear = selectedYear;
    let newMonth = selectedMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
    setSelectedDate(1);
    setSelectedTime(null);
  };

  const isBeforeToday = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date < today;
  };

  const formatTime = (hour: number, minute: number) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const minStr = minute.toString().padStart(2, "0");
    return `${hour12}:${minStr} ${ampm}`;
  };

  const bookAppointment = () => {
    if (!selectedTime) {
      Alert.alert("Please select a time block.");
      return;
    }
    Alert.alert(
      "Appointment Booked",
      `Your appointment is scheduled for ${MONTH_NAMES[selectedMonth]} ${selectedDate}, ${selectedYear} at ${formatTime(selectedTime.hour, selectedTime.minute)}.`,
      [{ text: "OK" }]
    );
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstWeekday = getFirstWeekdayOfMonth(selectedYear, selectedMonth);

  const calendarCells = [];
  for (let i = 0; i < firstWeekday; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  // Disable time blocks before (current time + 30 mins) on current day, and all before 9am or after 5pm already excluded
  const isTimeBlockDisabled = (hour: number, minute: number) => {
    if (isBeforeToday(selectedYear, selectedMonth, selectedDate)) return true;
    if (
      selectedYear === now.getFullYear() &&
      selectedMonth === now.getMonth() &&
      selectedDate === now.getDate()
    ) {
      const nowPlus30 = new Date(now.getTime() + 30 * 60000);
      const blockTime = new Date(selectedYear, selectedMonth, selectedDate, hour, minute);
      return blockTime < nowPlus30;
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Appointments</Text>
          <Text style={styles.headerSubtitle}>Schedule a consultation with our migration experts</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Month & Date</Text>

          <View style={styles.monthSelector}>
            <TouchableOpacity onPress={prevMonth} style={styles.monthNavBtn}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={
                  selectedYear < now.getFullYear() ||
                  (selectedYear === now.getFullYear() && selectedMonth <= now.getMonth())
                    ? "#ccc"
                    : "#0066cc"
                }
              />
            </TouchableOpacity>
            <Text style={styles.monthLabel}>
              {MONTH_NAMES[selectedMonth]} {selectedYear}
            </Text>
            <TouchableOpacity onPress={nextMonth} style={styles.monthNavBtn}>
              <Ionicons name="chevron-forward-outline" size={24} color="#0066cc" />
            </TouchableOpacity>
          </View>

          <View style={styles.weekdayRow}>
            {DAYS_IN_WEEK.map((d) => (
              <Text key={d} style={styles.weekdayText}>
                {d}
              </Text>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {calendarCells.map((day, index) => {
              if (!day) {
                return <View key={index} style={[styles.dateCell, styles.emptyDateCell]} />;
              }
              const disabled = isBeforeToday(selectedYear, selectedMonth, day);
              const isSelected = day === selectedDate;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dateCell,
                    disabled && styles.disabledDateCell,
                    isSelected && !disabled && styles.selectedDateCell,
                  ]}
                  disabled={disabled}
                  onPress={() => {
                    setSelectedDate(day);
                    setSelectedTime(null);
                  }}
                >
                  <Text
                    style={[
                      styles.dateText,
                      disabled && styles.disabledDateText,
                      isSelected && !disabled && styles.selectedDateText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Select Time</Text>
          <View style={styles.timeBlocksContainer}>
            {timeBlocks.map(({ hour, minute }, i) => {
              const disabled = isTimeBlockDisabled(hour, minute);
              const isSelected =
                selectedTime &&
                selectedTime.hour === hour &&
                selectedTime.minute === minute;

              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.timeBlock,
                    disabled && styles.disabledTimeBlock,
                    isSelected && !disabled && styles.selectedTimeBlock,
                  ]}
                  disabled={disabled}
                  onPress={() => setSelectedTime({ hour, minute })}
                >
                  <Text
                    style={[
                      styles.timeBlockText,
                      disabled && styles.disabledTimeBlockText,
                      isSelected && !disabled && styles.selectedTimeBlockText,
                    ]}
                  >
                    {formatTime(hour, minute)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.bookButton} onPress={bookAppointment}>
            <Text style={styles.bookButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff0f5" },
  header: { paddingHorizontal: 20, paddingTop: 20 },
  headerTitle: { fontSize: 26, fontWeight: "bold", color: "#80002a" },
  headerSubtitle: { fontSize: 14, color: "#80002a", marginTop: 4 },

  section: { marginTop: 20, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 14, color: "#80002a" },

  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  monthNavBtn: {
    padding: 8,
  },
  monthLabel: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 20,
    color: "#80002a",
  },

  weekdayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  weekdayText: {
    fontSize: 12,
    color: "#80002a",
    fontWeight: "700",
    width: 32,
    textAlign: "center",
  },

  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "flex-start",
  },
  dateCell: {
    width: 32,
    height: 32,
    margin: 4,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#80002a",
  },
  emptyDateCell: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  disabledDateCell: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  },
  selectedDateCell: {
    backgroundColor: "#80002a",
    borderColor: "#80002a",
  },
  dateText: {
    fontSize: 14,
    color: "#80002a",
  },
  disabledDateText: {
    color: "#ccc",
  },
  selectedDateText: {
    color: "white",
    fontWeight: "bold",
  },

  timeBlocksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
  timeBlock: {
    width: "30%",
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#fff0f5",
    borderWidth: 1,
    borderColor: "#80002a",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledTimeBlock: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  },
  selectedTimeBlock: {
    backgroundColor: "#80002a",
    borderColor: "#80002a",
  },
  timeBlockText: {
    color: "#80002a",
  },
  disabledTimeBlockText: {
    color: "#ccc",
  },
  selectedTimeBlockText: {
    color: "white",
    fontWeight: "bold",
  },

  bookButton: {
    marginTop: 20,
    backgroundColor: "#80002a",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

