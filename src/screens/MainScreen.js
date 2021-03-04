import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate("Post");
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Мой блог",
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
