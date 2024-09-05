import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Video, fetchVideos } from "@/api";
import { Colors } from "@/constants/Colors";
import VideoSnippet from "./VideoSnippet";

const VideoSection = ({ category }: { category: string }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchVideos({
      query: category,
      maxResults: 5,
      setLoading: setLoading,
      setVideos: setVideos,
    });
  }, []);

  const renderItem = ({ item }: { item: Video }) => (
    <VideoSnippet item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.accent} />
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={renderItem}
          horizontal={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: Colors.text,
    marginBottom: 10,
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default VideoSection;
