import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Users2Icon } from "lucide-react-native"

import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { ContentType, RouteName } from "app/constants"

import { AutoImage } from "./AutoImage"
import { Button } from "./Button"
import { Progress } from "./Progress"

export interface CourseCardProps {
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
}

export const CourseCard = observer(function CourseCard(props: CourseCardProps) {
  const { style } = props

  const navigation = useNavigation<any>()

  const $styles = [$container, style]

  const handleViewContentPress = () => {
    navigation.navigate(RouteName.ContentView, { type: ContentType.Folder })
  }

  const handleJoinDiscordPress = () => {
    // Linking.openURL("add_discord_link_here")
  }

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
          {/* TODO: Change this to a circular progress */}
          <Progress progress={50} />
        </View>
        <Button onPress={handleViewContentPress} text="View Content" />
        <TouchableOpacity activeOpacity={0.8} onPress={handleJoinDiscordPress} style={$footer}>
          <Users2Icon size={16} color={colors.content.secondary} />
          <Text style={$footerText} text="Join Discord Community" />
        </TouchableOpacity>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  borderColor: colors.border.default,
  borderRadius: spacing.md,
  borderWidth: 1,
}

const $image: ImageStyle = {
  borderTopLeftRadius: spacing.md,
  borderTopRightRadius: spacing.md,
  height: 200,
  width: "100%",
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
  gap: spacing.xs,
  justifyContent: "center",
}

const $footerText: TextStyle = {
  color: colors.content.secondary,
  fontSize: 16,
  lineHeight: 24,
}
