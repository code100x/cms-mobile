import { TxKeyPath } from "app/i18n"

import {
  BookmarksScreen,
  HistoryScreen,
  AccountScreen,
  MyCoursesScreen,
  DownloadsScreen,
} from "../screens"

import { PlayIcon } from "../../assets"

export enum RouteName {
  Account = "Account",
  Bookmarks = "Bookmarks",
  ContentView = "ContentView",
  Downloads = "Downloads",
  History = "History",
  Login = "Login",
  MyCourses = "MyCourses",
  Storybook = "Storybook",
  TabNavigator = "TabNavigator",
  VideoPlayer = "VideoPlayer",
}

// TODO: fix the types
export const TAB_ROUTES: Array<{
  name: any
  component: React.FC<any>
  translationKey: TxKeyPath
  icon: string
}> = [
  {
    name: RouteName.MyCourses,
    component: MyCoursesScreen,
    translationKey: "tabNavigator.myCourses",
    icon: PlayIcon,
  },
  {
    name: RouteName.Downloads,
    component: DownloadsScreen,
    translationKey: "tabNavigator.downloads",
    icon: PlayIcon,
  },
  {
    name: RouteName.Bookmarks,
    component: BookmarksScreen,
    translationKey: "tabNavigator.bookmarks",
    icon: PlayIcon,
  },
  {
    name: RouteName.History,
    component: HistoryScreen,
    translationKey: "tabNavigator.history",
    icon: PlayIcon,
  },
  {
    name: RouteName.Account,
    component: AccountScreen,
    translationKey: "tabNavigator.account",
    icon: PlayIcon,
  },
]
