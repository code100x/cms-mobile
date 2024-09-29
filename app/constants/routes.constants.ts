import {
  BookmarkIcon,
  DownloadIcon,
  HistoryIcon,
  LucideIcon,
  PlayCircleIcon,
  UserCircleIcon,
} from "lucide-react-native"

import * as Screens from "app/screens"
import { TxKeyPath } from "app/i18n"
import { TabParamList } from "app/navigators"

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
  Welcome = "Welcome",
}

export const TAB_ROUTES: Array<{
  component: React.FC<any>
  icon: LucideIcon
  name: keyof TabParamList
  translationKey: TxKeyPath
}> = [
  {
    component: Screens.MyCoursesScreen,
    icon: PlayCircleIcon,
    name: RouteName.MyCourses,
    translationKey: "tabNavigator.myCourses",
  },
  {
    component: Screens.DownloadsScreen,
    icon: DownloadIcon,
    name: RouteName.Downloads,
    translationKey: "tabNavigator.downloads",
  },
  {
    component: Screens.BookmarksScreen,
    icon: BookmarkIcon,
    name: RouteName.Bookmarks,
    translationKey: "tabNavigator.bookmarks",
  },
  {
    component: Screens.HistoryScreen,
    icon: HistoryIcon,
    name: RouteName.History,
    translationKey: "tabNavigator.history",
  },
  {
    component: Screens.AccountScreen,
    icon: UserCircleIcon,
    name: RouteName.Account,
    translationKey: "tabNavigator.account",
  },
]
