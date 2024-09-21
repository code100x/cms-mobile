import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators/TabNavigator"
import { useStores } from "app/models"

interface ProfileScreenProps extends TabScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  const {
    userStore: { logout },
  } = useStores()

  return (
    <Screen style={$root} contentContainerStyle={$contentContainer}>
      <Text onPress={logout} text="profile" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $contentContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
