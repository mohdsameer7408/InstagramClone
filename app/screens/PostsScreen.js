import React from "react";
import { FlatList } from "react-native";

import Post from "../components/Post";

const PostsScreen = () => {
  return (
    <FlatList
      data={Array(5).fill()}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => <Post />}
    />
  );
};

export default PostsScreen;
