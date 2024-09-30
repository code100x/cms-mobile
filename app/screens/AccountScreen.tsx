import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { ChevronRightIcon } from "lucide-react-native"

import { $styles, colors, spacing, typography } from "app/theme"
import { Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators"
import { useAccountScreenItem } from "app/hooks"

interface AccountScreenProps extends TabScreenProps<"Account"> {}

interface AccountItemProps {
  /** a required prop to specify the icon. */
  icon: React.ElementType
  /** an optional prop to specify if the item is logout action. */
  isLogoutAction?: boolean
  /** a required prop that handles the press event. */
  onPress: () => void
  /** a required prop to specify the title of the item. */
  title: string
}

const AccountItem = (props: AccountItemProps) => {
  const { icon: Icon, isLogoutAction = false, onPress, title } = props

  const iconColor = isLogoutAction ? colors.content.negative : colors.content.secondary

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={$accountItemContainer}>
      <View style={$styles.rowCenter}>
        <Icon size={16} color={iconColor} />
        <Text
          preset="formHelper"
          style={[$accountItemTitle, isLogoutAction && { color: colors.content.negative }]}
          text={title}
        />
      </View>
      <ChevronRightIcon size={16} color={iconColor} />
    </TouchableOpacity>
  )
}

export const AccountScreen: FC<AccountScreenProps> = observer(function AccountScreen() {
  const { accountItems } = useAccountScreenItem()

  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="My Account" />
      <View style={$container}>
        <View style={$avatar} />
        <Text preset="subheading" style={$username} text="ItsFlash" />
        <Text preset="formHelper" style={$email} text="itsflash@dccomics.com" />
      </View>
      <View style={$actionContainer}>
        {accountItems.map((item, index) => (
          <AccountItem
            icon={item.icon}
            isLogoutAction={item.isLogoutAction}
            key={index}
            onPress={item.onPress}
            title={item.title}
          />
        ))}
      </View>
      <Text style={$version} size="xxs" text="v0.0.1 | © 100xDevs" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $container: ViewStyle = {
  marginTop: spacing.md,
  padding: spacing.md,
}

const $avatar: ViewStyle = {
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: colors.background.secondary,
  borderRadius: spacing.md,
  height: 120,
  justifyContent: "center",
  width: 120,
}

const $username: TextStyle = {
  fontFamily: typography.primary.bold,
  marginTop: spacing.md,
  marginBottom: spacing.xxs,
  textAlign: "center",
}

const $email: TextStyle = {
  color: colors.content.secondary,
  fontFamily: typography.primary.medium,
  textAlign: "center",
}

const $actionContainer: ViewStyle = {
  gap: spacing.md,
  marginTop: spacing.md,
}

const $accountItemContainer: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.background.secondary,
  borderColor: colors.border.default,
  borderRadius: spacing.sm,
  borderWidth: 1,
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "space-between",
  padding: spacing.md,
}

const $accountItemTitle: TextStyle = {
  color: colors.content.primary,
  fontFamily: typography.primary.medium,
  marginLeft: spacing.sm,
}

const $version: TextStyle = {
  bottom: 0,
  color: colors.content.secondary,
  left: 0,
  marginVertical: spacing.md,
  position: "absolute",
  right: 0,
  textAlign: "center",
}
