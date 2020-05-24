import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Thunderstorm: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Drizzle: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Rain: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Snow: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Atmosphere: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Clear: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Clouds: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Haze: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
  Mist: { iconName: "weather-hail", gradient: ["#4DA0B0", "#D39D38"] },
};

export default function Weather({ temp, condition }) {
  console.log(condition);
  return (
    <LinearGradient
      colors={weatherOption["Mist"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOption[condition].iconName}
          color="white"
        />
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.temp}>{temp}°C</Text>
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
});
