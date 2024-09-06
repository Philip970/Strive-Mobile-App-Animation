import { View, StyleSheet, useWindowDimensions } from "react-native";
import {
  Canvas,
  LinearGradient,
  BlurMask,
  Rect,
} from "@shopify/react-native-skia";

const index = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Canvas style={styles.background}>
        <Rect x={0} y={0} width={width} height={height}>
          <BlurMask blur={2} style="normal" />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: height }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdcdcd",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});
