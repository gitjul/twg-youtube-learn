import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { ExternalLink } from "@/components/ExternalLink";

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
        <Text style={styles.welcomeText}>
          Welcome to the best YouTube-based learning application.
        </Text>
        <Link href="/(tabs)/home" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log in as guest</Text>
          </Pressable>
        </Link>
        <Text style={styles.disclaimerText}>
          By continuing you agree with{"\n"}
          <ExternalLink href="https://example.com" style={styles.link}>
            Terms and Conditions{" "}
          </ExternalLink>
          and{" "}
          <ExternalLink href="https://example.com" style={styles.link}>
            Privacy Policy
          </ExternalLink>
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
  welcomeText: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.button,
    borderRadius: 12,
    paddingTop: 14,
    paddingBottom: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 24,
    textAlign: "center",
  },
  disclaimerText: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  link: {
    color: Colors.text,
    fontFamily: "Poppins",
    textDecorationLine: "underline",
  },
});
