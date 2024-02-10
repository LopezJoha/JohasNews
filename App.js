import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

export default function App() {
  const [info, setInfo] = useState();
  const [currentInfo, setCurrentInfo] = useState();

  useEffect(() => {
    connectApi();
  }, []);

  const connectApi = async () => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-02-08&sortBy=publishedAt&apiKey=" +
        process.env.EXPO_PUBLIC_API_KEY,
      {
        method: "GET",
      }
    )
      .then((res) => {
        res.json().then((data) => {
          console.log(data)
          if (data?.articles) {
            setInfo(data.articles);
            setCurrentInfo(data.articles.slice(0, 20));
            console.log(data.articles);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addArticles = () => {
    const currentLength = currentInfo.length;
    const newSlice = info.slice(currentLength - 1, currentLength + 19);
    setCurrentInfo((prev) => {
      return [...prev, ...newSlice];
    });
  };

  return (
    <SafeAreaView
      style={[styles.container, { marginTop: StatusBar.currentHeight + 5 }]}
    >
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Top TechCrunch News</Text>
        </View>
        <View style={styles.flatListCont}>
          <FlatList
            data={currentInfo}
            renderItem={({ item }) => {
              return (
                <Card
                  image={item.urlToImage}
                  title={item.title}
                  subTitle={item.description}
                  link={item.url}
                  date={item.publishedAt}
                />
              );
            }}
            onEndReached={addArticles}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    
    fontWeight: "bold",
    color: "#14233b",
    textShadowColor: "#0044AA",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  flatListCont: {
    justifyContent: "center",
  },
});
