import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text>PostScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: "Пост номер 1",
  // headerStyle: { //стили для отдельной страницы
  //   backgroundColor: "red",
  // },
  // headerTintColor: "#fff",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
