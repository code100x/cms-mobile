import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { ContentCard, CourseCard, Screen, Text, TextField } from "app/components"
import { spacing, typography } from "app/theme"
import { ContentType } from "app/constants"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MyCoursesScreenProps extends AppStackScreenProps<"MyCourses"> {}

export const MyCoursesScreen: FC<MyCoursesScreenProps> = observer(function MyCoursesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const username = undefined
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <View>
        {/* Add user avatar here */}
        <Text style={$greeting} text={`Hi, ${username ?? "Hustler"}`} />
      </View>
      <Text preset="heading" style={$heading} text="My Courses" />
      <TextField placeholder="Search videos..." />
      <CourseCard />
      <ContentCard type={ContentType.Folder} isCompleted />
      <ContentCard type={ContentType.Video} />
      <ContentCard type={ContentType.Notion} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: spacing.md,
}

const $greeting: TextStyle = {
  fontSize: 20,
  lineHeight: 28,
  fontFamily: typography.primary.bold,
}

const $heading: TextStyle = {
  marginVertical: spacing.md,
}
