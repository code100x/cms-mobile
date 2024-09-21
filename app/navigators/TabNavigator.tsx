import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from "react-native-remix-icon"

import { RouteName, TAB_ROUTES } from "app/constants/routes.constants"

import { translate } from "../i18n"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type TabParamList = {
  Bookmark: undefined
  Explore: undefined
  History: undefined
  Home: undefined
  Profile: undefined
  Settings: undefined
}

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  const renderTabs = () =>
    TAB_ROUTES.map((tab) => {
      const { name: tabName, component, translationKey, icon } = tab
      return (
        <Tab.Screen
          key={tabName}
          name={tabName}
          component={component}
          options={{
            tabBarLabel: translate(translationKey),
            tabBarIcon: ({ focused }) => (
              <Icon
                name={icon}
                size="24"
                color={focused ? colors.palette.secondary600 : colors.palette.neutral300}
              />
            ),
          }}
        />
      )
    })

  return (
    <Tab.Navigator
      initialRouteName={RouteName.Home}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 56 }],
        tabBarActiveTintColor: colors.palette.secondary600,
        tabBarInactiveTintColor: colors.palette.neutral300,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      {renderTabs()}
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.sm,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
