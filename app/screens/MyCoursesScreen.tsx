import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"

import { CourseCard, ListView, Screen, Text, TextField } from "app/components"
import { spacing, typography } from "app/theme"
import { TabScreenProps } from "app/navigators"

interface MyCoursesScreenProps extends TabScreenProps<"MyCourses"> {}

const renderCourses = () => {
  return <CourseCard />
}

const renderSeparator = () => {
  return <View style={$separator} />
}

export const MyCoursesScreen: FC<MyCoursesScreenProps> = observer(function MyCoursesScreen() {
  // const { userStore } = useStores()
  const username = undefined

  return (
    <Screen contentContainerStyle={$root} safeAreaEdges={["top"]}>
      <View>
        {/* Add user avatar here */}
        <Text preset="subheading" style={$greeting} text={`Hi, ${username ?? "Hustler"}`} />
      </View>
      <Text preset="heading" style={$heading} text="My Courses" />
      <TextField placeholder="Search videos..." />
      <ListView
        // keyExtractor={(item) => item.id}
        contentContainerStyle={$listContainer}
        data={[{}, {}, {}, {}, {}]}
        estimatedItemSize={10}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderCourses}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $greeting: TextStyle = {
  fontFamily: typography.primary.bold,
}

const $heading: TextStyle = {
  marginVertical: spacing.md,
}

const $listContainer: ViewStyle = {
  paddingVertical: spacing.md,
}

const $separator: ViewStyle = {
  marginVertical: spacing.xs,
}
