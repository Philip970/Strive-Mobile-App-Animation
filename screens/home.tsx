import TournamentHeader from "@/components/tournament-header";
import TournamentList from "@/components/tournament-list";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@/components/tournament-list-item";
import { BACKGROUND_COLOR, FONT_FAMILIES } from "@/constants";
import { Tournaments, User } from "@/data";
import { Canvas, LinearGradient, Rect } from "@shopify/react-native-skia";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
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
      <TournamentHeader {...User} />
      <Text style={styles.appName}>TOURNAMENT</Text>
      <TournamentList data={Tournaments} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    // justifyContent: "center",
    // alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  appName: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: FONT_FAMILIES.RubikMono,
    marginVertical: 20,
    textAlign: "center",
  },
});
