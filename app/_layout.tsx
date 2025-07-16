import { Stack } from "expo-router";
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error ] = useFonts({
    "LibertinusMono-Regular": 
    require("../assets/fonts/LibertinusMono-Regular.ttf"),
  }) 

  useEffect(() => {
    if (loaded && error == null) {
      SplashScreen.hideAsync();
    }

  }, [loaded, error])

  if (!loaded && error) {
    return null;
  }


  return <Stack />; 

}
