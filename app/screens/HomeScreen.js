import React, { useState } from "react";
import { FlatList } from "react-native";

import Post from "../components/Post";
import Stories from "../components/Stories";

let timeoutId = null;

const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadPosts = async () => {
    setIsRefreshing(true);
    timeoutId = setTimeout(() => {
      setIsRefreshing(false);
      clearTimeout(timeoutId);
    }, 1000);
  };

  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => item.toString()}
      refreshing={isRefreshing}
      onRefresh={loadPosts}
      ListHeaderComponent={<Stories />}
      renderItem={() => <Post />}
    />
  );
};

export default HomeScreen;
