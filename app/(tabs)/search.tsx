import axios from "axios";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";
import SearchInput from "@/components/SearchInput";
import { YOUTUBE_API_KEY } from "@env";

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
    publishedAt: Date;
  };
}

const Search: React.FC = () => {
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
            maxResults: 15,
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

  const formattedDate = (date: Date) => {
    const dateObj = new Date(date);

    return `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`;
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
        <Text style={styles.date}>
          {formattedDate(item.snippet.publishedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />

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
    paddingTop: 40,
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
    marginBottom: 15,
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
    lineHeight: 14, // 12 in mockups but some letters overlapped with that value set
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

export default Search;
