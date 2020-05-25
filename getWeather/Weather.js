import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#8E0E00", "#1F1C18"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#000428", "#004e92"],
  },
  Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#ffd89b", "#19547b"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#A1FFCE", "#FAFFD1"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#304352", "#d7d2cc"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D40D40"],
    title: "Today is Hazy",
    subtitle: "",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#232526", "#414345"],
  },
  undefined: {
    iconName: "weather-cloudy-alert",
    gradient: ["#f4c4f3", "#fc67fa"],
  },
};

export default function Weather({ temp, condition }) {
  // console.log(weatherOption[condition].gradient);
  console.log(condition);
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOption[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "undefined",
  ]), // isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
