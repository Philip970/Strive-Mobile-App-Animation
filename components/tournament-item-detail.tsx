import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FONT_FAMILIES } from "@/constants";

type Props = {
  icon: string;
  value: string;
};

const TournamentItemDetail = ({ icon, value }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default TournamentItemDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 16,
    flex: 1,
  },
  value: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: FONT_FAMILIES.Rubik,
  },
});
