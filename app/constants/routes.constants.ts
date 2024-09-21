import { TxKeyPath } from "app/i18n"

import { RemixIcons } from "./remixIcon.constants"
import {
  HomeScreen,
  BookmarksScreen,
  HistoryScreen,
  ProfileScreen,
  ExploreScreen,
} from "../screens"

export enum RouteName {
  Bookmarks = "Bookmarks",
  Explore = "Explore",
  History = "History",
  Home = "Home",
  Login = "Login",
  Profile = "Profile",
  Settings = "Settings",
}

// TODO: fix the types
export const TAB_ROUTES: Array<{
  name: any
  component: React.FC<any>
  translationKey: TxKeyPath
  icon: string
}> = [
  {
    name: RouteName.Home,
    component: HomeScreen,
    translationKey: "tabNavigator.homeTab",
    icon: RemixIcons.HomeLine,
  },
  {
    name: RouteName.Explore,
    component: ExploreScreen,
    translationKey: "tabNavigator.exploreTab",
    icon: RemixIcons.CompassLine,
  },
  {
    name: RouteName.Bookmarks,
    component: BookmarksScreen,
    translationKey: "tabNavigator.bookmarksTab",
    icon: RemixIcons.BookmarkLine,
  },
  {
    name: RouteName.History,
    component: HistoryScreen,
    translationKey: "tabNavigator.historyTab",
    icon: RemixIcons.HistoryLine,
  },
  {
    name: RouteName.Profile,
    component: ProfileScreen,
    translationKey: "tabNavigator.profileTab",
    icon: RemixIcons.UserLine,
  },
]
