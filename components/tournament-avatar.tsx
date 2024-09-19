import Animated, { FadeInDown } from "react-native-reanimated";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import { COLORS, FONT_FAMILIES } from "@/constants";

type Props = {
  name: string;
  image?: ImageSourcePropType;
};

const TournamentAvatar = ({ name, image }: Props) => {
  return (
    <View style={styles.container}>
      {image ? (
        <Animated.Image
          entering={FadeInDown.delay(400)}
          source={image}
          style={styles.image}
        />
      ) : (
        <Animated.Text entering={FadeInDown.delay(400)} style={styles.name}>
          {name[0]}
        </Animated.Text>
      )}
    </View>
  );
};

export default TournamentAvatar;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGrayTransparent,
  },
  image: { width: 40, height: 40, borderRadius: 40 },
  name: {
    color: COLORS.White,
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: FONT_FAMILIES.RubikMono,
  },
});
