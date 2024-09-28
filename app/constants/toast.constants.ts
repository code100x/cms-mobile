import { IS_IOS } from "./common.constants"
// import { Platform, StatusBar } from "react-native"

// export function getStatusBarHeight(skipAndroid = false) {
//   return Platform.select({
//     ios: 20,
//     android: skipAndroid ? 0 : StatusBar.currentHeight,
//     default: 0,
//   })
// }

export enum ToastPreset {
  Error = "error",
  Success = "success",
  Warning = "Warning",
}

export const TOAST_COLOR: { [toastType: string]: string } = {
  [ToastPreset.Error]: "red",
  [ToastPreset.Success]: "green",
  [ToastPreset.Warning]: "yellow",
}

export const TOAST_ANIMATION_DURATION = 2000
export const TOAST_ANIMATION_SPEED = 1
export const TOAST_BOUNCE_INTENSITY = 1
export const TOAST_DURATION = 2100
export const TOAST_END_POSITION = IS_IOS ? 25 : 20
export const TOAST_START_POSITION = -100
