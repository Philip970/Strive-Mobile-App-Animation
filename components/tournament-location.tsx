import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TournamentIcon from "./tournament-icon";
import { COLORS, FONT_FAMILIES } from "@/constants";

type Props = {
  town: string;
  countryCode: string;
};

const TournamentLocation = ({ town, countryCode }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TournamentIcon name="location-sharp" color="white" />
        <Text style={[styles.text, styles.town]}>
          {town}
          {", "}
        </Text>
        <Text style={styles.text}>{countryCode}</Text>
      </View>
      <TournamentIcon name="chevron-down" color="white" />
    </View>
  );
};

export default TournamentLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightGrayTransparent,
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  town: {
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    fontFamily: FONT_FAMILIES.Rubik,
    color: COLORS.White,
  },
  leftContainer: { flexDirection: "row", alignItems: "center" },
});
