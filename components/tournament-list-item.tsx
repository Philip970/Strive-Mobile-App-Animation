import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { COLORS, FONT_FAMILIES } from "@/constants";
import { useEffect } from "react";
import { Tournament } from "@/data";
import TournamentItemDetail from "./tournament-item-detail";

const MINIMUM_SWIPE_WIDTH = 1;

export const MARGING = 16;
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const TOURNAMENT_LIST_ITEM_WIDTH = WINDOW_WIDTH - MARGING * 2;
export const TOURNAMENT_LIST_ITEM_HEIGHT = (TOURNAMENT_LIST_ITEM_WIDTH / 3) * 2;

type TournamentListItemProps = Tournament & {
  index: number;
  activeIndex: number;
  itemCount: number;
  setActiveIndex: (index: number) => void;
};

export const TournamentListItem: React.FC<TournamentListItemProps> = ({
  index,
  activeIndex,
  itemCount,
  game,
  price,
  date,
  location,
  slotAvailable,
  setActiveIndex,
}) => {
  const top = useSharedValue(20);
  const panGestureEvent = Gesture.Pan().onFinalize((event) => {
    if (index === activeIndex) {
      if (Math.abs(event.translationX) < MINIMUM_SWIPE_WIDTH) {
        // The user did not swipe far enough : Do nothing
      } else if (event.translationX > MINIMUM_SWIPE_WIDTH) {
        // The user swiped right : Move to the previous item
        if (activeIndex > 0) runOnJS(setActiveIndex)(index - 1);
      } else {
        // The user swiped left : Move to the next item
        if (activeIndex < itemCount - 1) runOnJS(setActiveIndex)(index + 1);
      }
    }
  });

  const rContainerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      activeIndex,
      [index - 3, index - 2, index - 1, index],
      [60, 100, 60, 0],
      Extrapolation.CLAMP
    );

    const translateX = interpolate(
      activeIndex,
      [index - 1, index, index + 1],
      [0, 0, -TOURNAMENT_LIST_ITEM_WIDTH - MARGING],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index],
      [0.85, 0.9, 1],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      activeIndex,
      [index - 2, index - 1, index],
      [0.8, 0.9, 1],
      Extrapolation.CLAMP
    );

    const rotate = interpolate(
      activeIndex,
      [index - 2, index - 1, index],
      [2, -2, 0],
      Extrapolation.CLAMP
    );

    return {
      top: index < 3 ? top.value * (index + 1) : 0,
      opacity,
      transform: [
        {
          translateX: withTiming(translateX),
        },
        {
          translateY: withTiming(translateY),
        },
        {
          scale: withTiming(scale),
        },
        {
          rotate: withTiming(`${rotate}deg`),
        },
      ],
    };
  });

  useEffect(() => {
    top.value = withTiming(0, { duration: 1000 });
  }, []);

  return (
    <GestureDetector gesture={panGestureEvent}>
      <Animated.View
        style={[
          rContainerStyle,
          {
            zIndex: -index,
          },
        ]}
      >
        <View
          style={[
            {
              width: TOURNAMENT_LIST_ITEM_WIDTH,
              // height: TOURNAMENT_LIST_ITEM_HEIGHT,
              // backgroundColor: COLORS[index],
              backgroundColor: "#fff",
            },
            styles.container,
          ]}
        >
          <View>
            <Image source={game.image} style={styles.image} />
            <Text style={styles.name}>{game.name}</Text>
            <View style={styles.detailContainer}>
              <TournamentItemDetail
                icon="ticket-outline"
                value={price === 0 ? "Free" : `${price} Fcfa`}
              />
              <TournamentItemDetail
                icon="people-outline"
                value={`${slotAvailable} Slots Available`}
              />
            </View>
            <View style={styles.detailContainer}>
              <TournamentItemDetail
                icon="calendar-outline"
                value={date.toLocaleDateString()}
              />
              <TournamentItemDetail icon="location-outline" value={location} />
            </View>
            <Pressable style={styles.joinButton}>
              <Text style={styles.join}>JOIN TOURNAMENT</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 16,
    padding: 16,
  },
  image: {
    width: 200,
    height: 80,
    borderRadius: 16,
  },
  detailContainer: { flexDirection: "row", gap: 16, marginTop: 16 },
  name: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 16,
    textTransform: "uppercase",
    fontFamily: FONT_FAMILIES.RubikMono,
  },
  joinButton: {
    backgroundColor: "#ff5252",
    marginTop: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",

    padding: 16,
  },
  join: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: FONT_FAMILIES.RubikMono,
  },
});
