import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>칭찬 한 줄</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DA3B4", // gray
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 27,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 15
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 30,
    // borderRadius: 10, //둥근 처리
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {}
});
