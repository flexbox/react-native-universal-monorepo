import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AsyncStorageExample } from "./AsyncStorageExample";
import { subplatform } from "./config";
import LogoSrc from "./logo.png";

export function App(): JSX.Element {
  const platformValue = subplatform
    ? `${Platform.OS} (${subplatform})`
    : Platform.OS;
  return (
    <NativeBaseProvider>
      {/* On React Native for Web builds coming from CRA, TypeScript
          complains about the image type, so we cast it as a workaround  */}
      <Box>Hello world</Box>
      <Box>Hello world</Box>
      <Box>Hello world</Box>
      <Box>Hello world</Box>
      <Box>Hello world</Box>
      <Box backgroundColor="red.400">Hello world</Box>
      <Box>Hello world</Box>

      <Image style={styles.logo} source={LogoSrc as ImageSourcePropType} />
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{platformValue}</Text>
        </View>
      </View>
      <AsyncStorageExample />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});
