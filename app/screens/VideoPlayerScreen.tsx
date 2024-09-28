import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { ArrowDownIcon } from "lucide-react-native"

import { AppStackScreenProps, goBack } from "app/navigators"
import { Chapters, Header, Screen, Slides, TabViewWrapper, Text } from "app/components"
import { colors, spacing, typography } from "app/theme"
import { CourseContent } from "app/components/CourseContent"
import { CHAPTERS_DUMMY_DATA, HIT_SLOP_5 } from "app/constants"
import { $styles } from "app/theme/styles"

interface VideoPlayerScreenProps extends AppStackScreenProps<"VideoPlayer"> {}

const renderScene = ({ route }: { route: { key: string; title: string } }) => {
  switch (route.key) {
    case "chapters":
      return <Chapters data={CHAPTERS_DUMMY_DATA} />
    case "content":
      return <CourseContent />
    case "slides":
      return <Slides />
    default:
      return null
  }
}

export const VideoPlayerScreen: FC<VideoPlayerScreenProps> = observer(function VideoPlayerScreen() {
  const [routes] = React.useState([
    { key: "chapters", title: "Chapters" },
    { key: "content", title: "Content" },
    { key: "slides", title: "Slides" },
  ])

  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1}>
      <Header
        onLeftPress={goBack}
        // leftText="Back" // TODO: Check why is it not visible with the icon and the component has onPress handler already
        backgroundColor={colors.background.primary}
        leftIcon="caretLeft"
        leftIconColor={colors.content.secondary}
      />
      <Text style={$videoLayout} />
      <View style={$titleContainer}>
        <Text preset="subheading" style={$heading} text="Introduction to HTML" />
        <TouchableOpacity activeOpacity={0.8} hitSlop={HIT_SLOP_5} style={$downloadButton}>
          <ArrowDownIcon stroke={colors.content.secondary} size={16} />
        </TouchableOpacity>
      </View>
      <TabViewWrapper routes={routes} customRenderScene={renderScene} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $titleContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}

const $heading: TextStyle = {
  fontFamily: typography.primary.bold,
  marginVertical: spacing.md,
}

const $downloadButton: ViewStyle = {
  alignItems: "center",
  borderRadius: spacing.md,
  justifyContent: "center",
  borderWidth: 1,
  borderColor: colors.border.default,
  padding: spacing.xs,
}

const $videoLayout: ViewStyle = {
  height: 200,
  opacity: 0.5,
  backgroundColor: "black",
}
