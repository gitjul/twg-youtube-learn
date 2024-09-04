import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/(tabs)/home" asChild>
        <Pressable>
          <Text>Log in as guest</Text>
        </Pressable>
      </Link>
    </View>
  );
}
