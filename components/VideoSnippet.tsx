import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
import { formattedDate } from "@/helpers";
import { Video } from "@/api";

const VideoSnippet = ({ item }: { item: Video }) => (
  <TouchableOpacity style={styles.videoItem}>
    <Image
      source={{ uri: item.snippet.thumbnails.medium.url }}
      style={styles.thumbnail}
    />
    <Text style={styles.title} numberOfLines={2}>
      {item.snippet.title}
    </Text>
    <Text style={styles.date}>{formattedDate(item.snippet.publishedAt)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  videoItem: {
    marginBottom: 15,
    marginRight: 15,
    width: 180,
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 15,
    marginTop: 10,
  },
  title: {
    color: Colors.text,
    fontSize: 12,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 12,
    paddingTop: 10,
  },
  date: {
    alignSelf: "flex-end",
    fontFamily: "Poppins",
    fontSize: 10,
    lineHeight: 24,
    marginTop: 6,
  },
});

export default VideoSnippet;
