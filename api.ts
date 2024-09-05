import { YOUTUBE_API_KEY } from "@env";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export interface Video {
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

interface Params {
  query: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setVideos: Dispatch<SetStateAction<Video[]>>;
}

export const fetchVideos = async (params: Params) => {
  params.setLoading(true);

  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 15,
          q: params.query,
          key: YOUTUBE_API_KEY,
          type: "video",
        },
      }
    );
    params.setVideos(response.data.items);
  } catch (error) {
    console.error(error);
  } finally {
    params.setLoading(false);
  }
};
