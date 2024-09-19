import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONT_FAMILIES } from "@/constants";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  name: string;
  profile?: ImageSourcePropType;
};

const TournamentAvatar = ({ name, profile }: Props) => {
  return (
    <View style={styles.container}>
      {profile ? (
        <Animated.Image
          entering={FadeInDown.delay(1000)}
          source={profile}
          style={styles.image}
        />
      ) : (
        <Animated.Text entering={FadeInDown.delay(1000)} style={styles.name}>
          {name[0]}
        </Animated.Text>
      )}
    </View>
  );
};

export default TournamentAvatar;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGrayTransparent,
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  name: {
    color: COLORS.White,
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: FONT_FAMILIES.RubikMono,
  },
});
