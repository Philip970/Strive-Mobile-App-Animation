import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Dimensions, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { COLORS } from "@/constants";
import { useEffect } from "react";

const MINIMUM_SWIPE_WIDTH = 1;

export const MARGING = 16;
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const TORNAMENT_LIST_ITEM_WIDTH = WINDOW_WIDTH - MARGING * 2;
export const TORNAMENT_LIST_ITEM_HEIGHT = (TORNAMENT_LIST_ITEM_WIDTH / 3) * 2;

type TornamentListItemProps = {
  index: number;
  activeIndex: number;
  itemCount: number;
  setActiveIndex: (index: number) => void;
};

export const TornamentListItem: React.FC<TornamentListItemProps> = ({
  index,
  activeIndex,
  itemCount,
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
      [index - 2, index - 1, index, index + 1],
      [55, 20, 0, 0],
      Extrapolation.CLAMP
    );

    const translateX = interpolate(
      activeIndex,
      [index - 1, index, index + 1],
      [0, 0, -TORNAMENT_LIST_ITEM_WIDTH - MARGING],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [0.86, 0.95, 1, 1],
      Extrapolation.CLAMP
    );

    const rotate = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [2, -2, 0, 0],
      Extrapolation.CLAMP
    );

    return {
      top: index < 3 ? top.value * (index + 1) : 0,
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
          style={{
            width: TORNAMENT_LIST_ITEM_WIDTH,
            height: TORNAMENT_LIST_ITEM_HEIGHT,
            backgroundColor: COLORS[index],
            position: "absolute",
            alignSelf: "center",
            borderRadius: 25,
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
};
