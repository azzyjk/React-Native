import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { TMAP_API } from "react-native-dotenv";

export default class App extends React.Component {
  getTMapApi = async () => {
    const { data } = await axios.get(
      `https://apis.openapi.sk.com/tmap/geo/fullAddrGeo?&version=1&fullAddr=서울 관악구 시흥대로 552 석천빌딩 8층&appKey=${TMAP_API}`
    );
    console.log(data);
  };
  componentDidMount() {
    this.getTMapApi();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
