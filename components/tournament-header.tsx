import { StyleSheet, Text, View } from "react-native";

import { User } from "@/data";
import TournamentAvatar from "./tournament-avatar";
import TournamentLocation from "./tournament-location";
import TournamentIcon from "./tournament-icon";
import Animated, { FadeInDown } from "react-native-reanimated";

const TournamentHeader = ({ name, avatar, town, countryCode }: User) => {
  return (
    <View style={styles.container}>
      <TournamentAvatar image={avatar} name={name} />
      <Animated.View style={{ flex: 1 }} entering={FadeInDown.delay(200)}>
        <TournamentLocation town={town} countryCode={countryCode} />
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(300)}>
        <TournamentIcon
          name="notifications-outline"
          size={50}
          backgroundColor="white"
        />
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(400)}>
        <TournamentIcon
          name="search-outline"
          size={50}
          backgroundColor="white"
        />
      </Animated.View>
    </View>
  );
};

export default TournamentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
});
