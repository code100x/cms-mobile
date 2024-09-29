import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"

import { TabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { $styles, spacing } from "app/theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface DownloadsScreenProps extends TabScreenProps<"Downloads"> {}

export const DownloadsScreen: FC<DownloadsScreenProps> = observer(function DownloadsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Downloads" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}
