import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "./Button";

export default function Card({ image, title, subTitle, link, date }) {
  const img = { uri: image };

  const averiguar = (fecha) => {
    let date = new Date(fecha);
    let dateMDY = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return dateMDY;
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <View style={styles.contentCont}>
        <Text numberOfLines={1} style={[styles.title, styles.addit]}>
          {averiguar(date)}
        </Text>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={6} style={styles.paragraph}>
          {subTitle}
        </Text>

        <Button Link={link} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    justifySelf: "center",
    padding: 5,
    margin: 5,
    gap: 5,
  },
  contentCont: {
    width: "50%",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
    backgroundColor: "#3f51b5",
    opacity: 0.8,
  },
  contBg: {
    flex: 1,
  },
  image: {
    width: "50%",
    height: "100%",
  },
  text: {},
  paragraph: {
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "justify",
  },
  addit: {
    fontSize: 10,
    color: "white",
  },
});
