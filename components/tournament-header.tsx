import { StyleSheet, Text, View } from "react-native";

import { User } from "@/data";
import TournamentAvatar from "./tournament-avatar";
import TournamentLocation from "./tournament-location";
import TournamentIcon from "./tournament-icon";

const TournamentHeader = ({ name, avatar, town, countryCode }: User) => {
  return (
    <View style={styles.container}>
      <TournamentAvatar image={avatar} name={name} />
      <TournamentLocation town={town} countryCode={countryCode} />
      <TournamentIcon
        name="notifications-outline"
        size={60}
        backgroundColor="white"
      />
      <TournamentIcon name="search-outline" size={60} backgroundColor="white" />
    </View>
  );
};

export default TournamentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 200,
  },
});
