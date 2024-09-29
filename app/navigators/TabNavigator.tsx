import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { translate } from "../i18n"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { TAB_ROUTES } from "app/constants"

export type TabParamList = {
  Account: undefined
  Bookmarks: undefined
  Downloads: undefined
  History: undefined
  MyCourses: undefined
  Storybook: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

// TODO: Can be maintained to list all the components [#issue]
// const TABS = [...TAB_ROUTES]

// if (__DEV__) {
//   TABS.push({
//     routeName: "Storybook",
//     component: StorybookScreen,
//     translationKey: "tabNavigator.storybook",
//     icon: BookIcon,
//   })
// }

const renderTabs = () => {
  return TAB_ROUTES.map((route) => {
    const { name: routeName, component, translationKey, icon: Icon } = route
    return (
      <Tab.Screen
        component={component}
        key={routeName}
        name={routeName}
        options={{
          tabBarLabel: translate(translationKey),
          tabBarIcon: ({ focused }) => (
            <Icon color={focused ? colors.content.brand : colors.content.secondary} size={24} />
          ),
        }}
      />
    )
  })
}

/**
 * This is the main navigator for the screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `TabNavigator`.
 */
export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 50 }],
        tabBarActiveTintColor: colors.content.brand,
        tabBarInactiveTintColor: colors.content.secondary,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      {renderTabs()}
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background.secondary,
  borderTopColor: colors.border.default,
  borderTopWidth: 1,
  // TODO: Can make an issue for this [#issue]
  // borderTopRightRadius: spacing.md,
  // borderTopLeftRadius: spacing.md,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  marginTop: spacing.xxxs,
  fontSize: 10,
  fontFamily: typography.primary.medium,
  lineHeight: 14,
}
