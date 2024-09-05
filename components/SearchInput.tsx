import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";

interface SearchInputProps {
  data: string[];
}

const SearchInput: React.FC<SearchInputProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>(data);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        placeholder="Search..."
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SearchInput;
