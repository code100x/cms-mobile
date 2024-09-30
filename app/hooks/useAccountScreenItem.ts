import { useCallback, useMemo } from "react"
import { useNavigation } from "@react-navigation/core"
import { InfoIcon, LogOutIcon, ShieldIcon } from "lucide-react-native"

import { closeBottomSheet, openBottomSheet } from "app/utils"
import { RouteName } from "app/constants"
import { useStores } from "app/models"

export const useAccountScreenItem = () => {
  const navigation = useNavigation<any>()
  const { userStore } = useStores()
  const { logout } = userStore

  const handleActionItemPress = useCallback(
    (url: string) => () => {
      navigation.navigate(RouteName.Webview, { url })
    },
    [navigation],
  )

  const handleLogoutConfirm = useCallback(() => {
    closeBottomSheet()
    logout()
  }, [logout])

  const handleLogoutPress = useCallback(() => {
    openBottomSheet({
      icon: LogOutIcon,
      onCancel: closeBottomSheet,
      onConfirm: handleLogoutConfirm,
      subtitle: "Are you sure you want to log out?",
      title: "Logout",
    })
  }, [handleLogoutConfirm])

  const accountItems = useMemo(
    () => [
      {
        icon: InfoIcon,
        title: "Terms & Conditions",
        onPress: handleActionItemPress("https://app.100xdevs.com/tnc"),
      },
      {
        icon: ShieldIcon,
        title: "Privacy Policy",
        onPress: handleActionItemPress("https://app.100xdevs.com/privacy-policy"),
      },
      { icon: LogOutIcon, title: "Logout", onPress: handleLogoutPress, isLogoutAction: true },
    ],
    [handleActionItemPress, handleLogoutPress],
  )

  return { accountItems }
}
