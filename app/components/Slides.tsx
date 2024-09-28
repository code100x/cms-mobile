import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { typography } from "app/theme"
import { Text } from "app/components/Text"

export interface SlidesProps {
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
}

export const Slides = observer(function Slides(props: SlidesProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Text style={$text}>Coming Soon</Text>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 20,
  textAlign: "center",
}
