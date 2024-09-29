import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing } from "app/theme"
import { Text } from "app/components/Text"

export interface ProgressProps {
  /** a required prop to specify the progress. */
  progress: number
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
}

export const Progress = observer(function Progress(props: ProgressProps) {
  const { progress, style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={$bar}>
        <View style={[$fill, { width: `${progress}%` }]} />
      </View>
      <Text style={$text}>{progress}%</Text>
    </View>
  )
})

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $bar: ViewStyle = {
  backgroundColor: "#0e1829",
  borderRadius: spacing.xxs,
  flex: 1,
  height: spacing.xs,
}

const $fill: ViewStyle = {
  backgroundColor: "#1d3255",
  borderRadius: spacing.xxxs,
  height: "100%",
}

const $text: TextStyle = {
  color: "#9CA3AF",
  fontSize: spacing.md,
  marginLeft: spacing.sm,
}
