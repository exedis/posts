import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

export const Post = ({}) => {
  return (
    <View style={styles.post}>
      <ImageBackground style={styles.image} source={{ uri: post.img }}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{post.date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title:{
      color:'white',
      fontFamily:'OpenRegular'
  }
});
