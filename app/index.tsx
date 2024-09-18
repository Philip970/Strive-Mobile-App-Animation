import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { BACKGROUND_COLOR, Stories } from "../constants";
import {
  TORNAMENT_LIST_ITEM_HEIGHT,
  TornamentListItem,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  MARGING,
} from "../components/tornament-list-item";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import {
  BlurMask,
  Canvas,
  LinearGradient,
  Rect,
} from "@shopify/react-native-skia";

const index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />
      <Canvas style={styles.background}>
        <Rect x={0} y={0} width={WINDOW_WIDTH} height={WINDOW_HEIGHT}>
          {/* <BlurMask blur={2} style="normal" /> */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: WINDOW_HEIGHT }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          />
        </Rect>
      </Canvas>
      <View
        style={{
          width: "100%",
          height: TORNAMENT_LIST_ITEM_HEIGHT + MARGING * 2,
        }}
      >
        {Stories.map((story, index) => {
          return (
            <TornamentListItem
              index={index}
              activeIndex={activeIndex}
              itemCount={Stories.length}
              setActiveIndex={setActiveIndex}
              key={index}
            />
          );
        })}
      </View>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});
