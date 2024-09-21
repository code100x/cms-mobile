import * as React from "react"
import { Image, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"

import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Card } from "./Card"

export interface CourseCardProps {
  /** An optional style override useful for padding & margin */
  style?: StyleProp<ViewStyle>
}

export const CourseCard = (props: CourseCardProps) => {
  const { style } = props
  const $styles = [$container, style]

  return (
    <Card
      style={$styles}
      heading="Hello"
      HeadingComponent={
        <Image
          source={{
            uri: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
          }}
          style={$logo}
          resizeMode="contain"
        />
      }
    />
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
  borderRadius: 8,
  backgroundColor: "#010101",
}
const $logo: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: 8,
  marginBottom: 8,
}
