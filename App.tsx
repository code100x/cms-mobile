import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"

SplashScreen.preventAutoHideAsync()

function MyApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default MyApp
