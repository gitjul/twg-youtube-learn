import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput } from "react-native";

interface SearchProps {
  searchQuery: string;
  handleSearch: (query: string) => Promise<void>;
}

const SearchInput = (props: SearchProps) => {
  return (
    <TextInput
      style={styles.input}
      value={props.searchQuery}
      placeholder="Search Videos"
      onChangeText={props.handleSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Colors.text,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default SearchInput;
