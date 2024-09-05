import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const YOUTUBE_API_KEY = "AIzaSyBQ8xv6aATWBoLw-uObo3EW6GSoXonK8FQ";

const SearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length < 3) return; // Only search when the query is at least 3 characters
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 50,
            q: query,
            key: YOUTUBE_API_KEY,
            type: "video",
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: Video }) => (
    <TouchableOpacity style={styles.videoItem}>
      <Image
        source={{ uri: item.snippet.thumbnails.medium.url }}
        style={styles.thumbnail}
      />
      <View style={styles.videoInfo}>
        <Text style={styles.title}>{item.snippet.title}</Text>
        <Text style={styles.description}>{item.snippet.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        placeholder="Search Videos"
        onChangeText={handleSearch}
      />
      {loading ? (
        <ActivityIndicator size="large" color={Colors.accent} />
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 72,
  },
  input: {
    height: 40,
    borderColor: Colors.text,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  videoItem: {
    flexDirection: "column",
    marginBottom: 20,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
  },
  videoInfo: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: Colors.text,
    fontSize: 12,
    fontFamily: "PoppinsBold",
    lineHeight: 12,
    paddingTop: 10,
  },
  description: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: "Poppins",
    lineHeight: 12,
    paddingTop: 10,
  },
});

export default SearchInput;
