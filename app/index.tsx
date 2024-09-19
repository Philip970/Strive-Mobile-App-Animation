import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import Home from "@/screens/home";
import { FONT_FAMILIES } from "../constants";

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, error] = useFonts({
    [FONT_FAMILIES.Rubik]: require("../assets/fonts/Rubik-VariableFont_wght.ttf"),
    [FONT_FAMILIES.RubikMono]: require("../assets/fonts/RubikMonoOne-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Home />
    </GestureHandlerRootView>
  );
};

export default index;
