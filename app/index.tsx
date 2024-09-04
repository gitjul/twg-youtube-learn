import * as Linking from "expo-linking";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Logo"}
      />
      <Image
        style={styles.icon}
        source={require("../assets/images/app-icon.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"App icon"}
      />
      <View>
        <Text style={styles.text}>
          Welcome to the best YouTube-based learning application.
        </Text>
        <Link href="/(tabs)/home" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log in as guest</Text>
          </Pressable>
        </Link>
        <Text style={styles.disclaimerText}>
          By continuing you agree with{"\n"}
          <Text
            onPress={() => Linking.openURL("https://example.com")}
            style={styles.link}
          >
            <Text>Terms and Conditions</Text>{" "}
          </Text>
          and{" "}
          <Text
            onPress={() => Linking.openURL("https://example.com")}
            style={styles.link}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
    padding: 20,
    justifyContent: "space-between",
  },
  logo: { marginTop: 50, marginHorizontal: "auto" },
  icon: {
    width: 128,
    height: 128,
    marginVertical: 50,
    marginHorizontal: "auto",
  },
  text: {
    color: "#fff",
    fontSize: 22,
  },
  link: {
    color: Colors.text,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: Colors.button,
    borderRadius: 12,
    paddingTop: 14,
    paddingBottom: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 16,
    textAlign: "center",
  },
  disclaimerText: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 20,
    textAlign: "center",
  },
});
