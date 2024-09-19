import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Tournament } from "@/data";
import {
  MARGING,
  TOURNAMENT_LIST_ITEM_HEIGHT,
  TournamentListItem,
} from "./tournament-list-item";

type Props = {
  data: Tournament[];
};

const TournamentList = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View
      style={{
        width: "100%",
        height: TOURNAMENT_LIST_ITEM_HEIGHT + MARGING * 4,
      }}
    >
      {data.map((tournament, index) => {
        return (
          <TournamentListItem
            {...tournament}
            index={index}
            activeIndex={activeIndex}
            itemCount={data.length}
            setActiveIndex={setActiveIndex}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default TournamentList;

const styles = StyleSheet.create({});
