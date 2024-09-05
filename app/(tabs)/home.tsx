import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Colors } from "@/constants/Colors";
import VideoSection from "@/components/VideoSection";

const Home: React.FC = () => {
  const categories = ["React Native", "React", "Typescript", "Javascript"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <VideoSection category={category} key={`${category}${index}`} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  input: {
    height: 40,
    borderColor: Colors.text,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default Home;
