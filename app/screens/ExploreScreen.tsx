import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { CourseCard, Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators/TabNavigator"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ExploreScreenProps extends TabScreenProps<"Explore"> {}

export const ExploreScreen: FC<ExploreScreenProps> = observer(function ExploreScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      contentContainerStyle={$contentContainer}
      preset="scroll"
      safeAreaEdges={["top"]}
    >
      <Text text="explore" />
      {[{}, {}, {}].map((course, index) => (
        <CourseCard key={index} />
      ))}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: 16,
}

const $contentContainer: ViewStyle = {
  gap: 16,
}
