import { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import SearchIcon from "@/components/navigation/SearchIcon";
import { Colors } from "@/constants/Colors";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchProps) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <SearchIcon color={Colors.text} height={24} width={24} />
      </View>
      <TextInput
        style={styles.input}
        value={props.searchQuery}
        placeholder="Search Videos"
        onChangeText={props.setSearchQuery}
        placeholderTextColor="rgba(43, 45, 66, 0.6)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.text,
    borderRadius: 15,
    borderWidth: 2,
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    height: 44,
    marginBottom: 10,
    paddingLeft: 48,
    paddingRight: 10,
    paddingTop: 3,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    left: 12,
  },
});

export default SearchInput;
