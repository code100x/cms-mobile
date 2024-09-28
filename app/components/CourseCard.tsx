import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { AutoImage } from "./AutoImage"
import { Button } from "./Button"

export interface CourseCardProps {
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
}

export const CourseCard = observer(function CourseCard(props: CourseCardProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <AutoImage
        source={{
          uri: "https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg",
        }}
        style={$image}
      />
      <View style={$subContainer}>
        <View>
          <Text style={$title} text="Cohort 3.0 | Web Dev" />
          {/* Add progress bar component here */}
        </View>
        <Button text="View Content" />
        <View style={$footer}>
          {/* add icon here */}
          <Text style={$footerText} text="Join Discord Community" />
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.border.default,
  borderRadius: spacing.md,
}

const $image: ImageStyle = {
  width: "100%",
  height: 200,
  borderTopLeftRadius: spacing.md,
  borderTopRightRadius: spacing.md,
}

const $subContainer: ViewStyle = {
  padding: spacing.md,
  gap: spacing.md,
}

const $title: TextStyle = {
  color: colors.content.primary,
  fontFamily: typography.primary.bold,
  fontSize: 20,
  lineHeight: 28,
}

const $footer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "center",
}

const $footerText: TextStyle = {
  color: colors.content.secondary,
  fontSize: 16,
  lineHeight: 24,
}
