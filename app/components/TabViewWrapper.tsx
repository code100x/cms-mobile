import * as React from "react"
import { StyleProp, TextStyle, useWindowDimensions, ViewStyle } from "react-native"

import { colors } from "app/theme"
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from "react-native-tab-view"
import { Text } from "./Text"

interface IRoutes {
  /** a required prop that is unique for all routes */
  key: string
  /** an optional prop that gives icon to tab component */
  icon?: JSX.Element
  /** a required prop that tells the title of route */
  title: string
  /** an optional prop that provides the web url */
  url?: string
}

export interface TabViewWrapperProps {
  /** an optional prop and gives custom renderScene function for Tab View */
  customRenderScene?: any
  /** an optional prop to select the default tab index. */
  defaultIndex?: number
  /** an optional prop to enable lazy loading the tabs not yet loaded. */
  lazyLoading?: boolean
  /** a required prop and is used to define the titles of tabs */
  routes: Array<IRoutes>
  /** an optional prop and is used to define the child of the tab */
  screenList?: any
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
}

const renderSceneProvider = (customRenderScene: any, screenList: any) => {
  let renderScene
  if (customRenderScene) {
    renderScene = customRenderScene
  } else {
    renderScene = SceneMap(screenList)
  }
  return renderScene
}

const renderTabBarLabel = ({ route, focused }: { route: any; focused: boolean }) => (
  <Text style={focused ? $focusedTabBarLabel : $tabBarLabel} text={route.title} />
)

const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<any> }) => (
  <TabBar
    {...props}
    indicatorStyle={$tabIndicator}
    style={$tabBar}
    renderLabel={renderTabBarLabel}
  />
)

export const TabViewWrapper = React.memo(function TabViewWrapper(props: TabViewWrapperProps) {
  const {
    customRenderScene,
    defaultIndex = 0,
    lazyLoading = true,
    routes,
    screenList,
    style,
  } = props

  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(defaultIndex)

  return (
    <TabView
      initialLayout={{ width: layout.width }}
      lazy={lazyLoading}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderSceneProvider(customRenderScene, screenList)}
      renderTabBar={renderTabBar}
      style={style}
    />
  )
})

const $tabBar: ViewStyle = {
  backgroundColor: colors.background.primary,
  borderBottomColor: colors.border.default,
  borderBottomWidth: 1,
}

const $tabIndicator: ViewStyle = {
  backgroundColor: colors.background.brand,
}

const $tabBarLabel: TextStyle = {
  color: colors.content.secondary,
}

const $focusedTabBarLabel: TextStyle = {
  color: colors.content.primary,
}
