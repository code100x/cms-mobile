import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { ToastStoreType } from "app/models"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import {
  TOAST_ANIMATION_DURATION,
  TOAST_ANIMATION_SPEED,
  TOAST_BOUNCE_INTENSITY,
  TOAST_COLOR,
  TOAST_DURATION,
  TOAST_END_POSITION,
  TOAST_START_POSITION,
} from "app/constants"

interface IToastProps {
  /** toastStore: is a required prop that determines the store for the toast */
  toastStore: ToastStoreType
}

export const Toast = observer(function Toast(props: IToastProps) {
  const { toastStore } = props
  const { message, onClose, preset } = toastStore

  const translateY = useSharedValue(TOAST_START_POSITION)

  const animateToast = (toValue: number) => {
    translateY.value = withSpring(toValue, {
      damping: TOAST_BOUNCE_INTENSITY, // This controls bounciness
      stiffness: TOAST_ANIMATION_SPEED,
    })
  }

  const closingAnimation = () => animateToast(TOAST_START_POSITION)

  React.useEffect(() => {
    animateToast(TOAST_END_POSITION)
    const toastAnimationTimeout = setTimeout(closingAnimation, TOAST_ANIMATION_DURATION)
    const toastClosingTimeout = setTimeout(onClose, TOAST_DURATION)

    return () => {
      clearTimeout(toastAnimationTimeout)
      clearTimeout(toastClosingTimeout)
    }
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return (
    <Animated.View style={[$container, { backgroundColor: TOAST_COLOR[preset] }, animatedStyle]}>
      <Text style={$message}>{message}</Text>
    </Animated.View>
  )
})

const $container: ViewStyle = {
  left: 20,
  padding: 16,
  position: "absolute",
  right: 20,
  zIndex: 1,
}

const $message: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
