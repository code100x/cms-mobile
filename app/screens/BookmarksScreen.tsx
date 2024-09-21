import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"

import { Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators/TabNavigator"
import { useNavigation } from "@react-navigation/native"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookmarksScreenProps extends TabScreenProps<"Bookmark"> {}

export const BookmarksScreen: FC<BookmarksScreenProps> = observer(function BookmarksScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // TODO: Fix type here
  const navigation = useNavigation<any>()

  const handleTempNav = () => {
    navigation.navigate("ContentView")
  }

  return (
    <Screen style={$root} contentContainerStyle={$contentContainer} safeAreaEdges={["top"]}>
      <Text onPress={handleTempNav} text="bookmarks" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $contentContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
