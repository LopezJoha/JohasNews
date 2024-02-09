import React from "react";
import { TouchableOpacity, Text, StyleSheet, Linking } from "react-native";

export default function Button({ Link }) {
  const handlePress = (link) => {
    const url = link;
    Linking.openURL(url);
  };
  return (
    <TouchableOpacity onPress={() => handlePress(Link)} style={styles.button}>
      <Text style={styles.text}>Continuar leyendo</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#3f51b5",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: "#3f51b5",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
