import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, useWindowDimensions, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { CourseContent, Screen, Text } from "app/components"
import { colors, typography } from "app/theme"
import { SceneRendererProps, NavigationState, TabBar, TabView } from "react-native-tab-view"
import Video, { VideoRef } from "react-native-video"
import { Chapters } from "app/components/Chapters"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const DUMMY_DATA = [
  { title: "What is Promise?", timeStamp: "00:10", start: 0, end: 10 },
  { title: "Callback Hell", timeStamp: "04:00", start: 10, end: 40 },
  { title: "Promise.all", timeStamp: "09:00", start: 40, end: 90 },
  { title: "Prmise.race", timeStamp: "12:00", start: 90, end: 120 },
  { title: "Promise.any", timeStamp: "15:00", start: 120, end: 150 },
  { title: "Chaining Promises", timeStamp: "18:00", start: 150, end: 180 },
  { title: "Promise.allSettled", timeStamp: "21:00", start: 180, end: 210 },
  { title: "Promise.prototype.finally", timeStamp: "24:00", start: 210, end: 240 },
  { title: "Why use Promises?", timeStamp: "27:00", start: 240, end: 270 },
  { title: "What are async/await?", timeStamp: "30:00", start: 270, end: 300 },
  { title: "Async/await in depth", timeStamp: "33:00", start: 300, end: 330 },
  {
    title: "Async/await with async generators Async/await with async generators",
    timeStamp: "36:00",
    start: 330,
    end: 360,
  },
  { title: "Error handling with async/await", timeStamp: "39:00", start: 360, end: 390 },
  { title: "Concurrency with async/await", timeStamp: "42:00", start: 390, end: 420 },
  { title: "Cancellation with async/await", timeStamp: "45:00", start: 420, end: 450 },
  { title: "Using async/await with React", timeStamp: "48:00", start: 450, end: 480 },
]

interface ContentViewScreenProps extends AppStackScreenProps<"ContentView"> {}

export const ContentViewScreen: FC<ContentViewScreenProps> = observer(function ContentViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const videoRef = useRef<VideoRef>(null)
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: "chapters", title: "Chapters" },
    { key: "content", title: "Course Content" },
  ])

  const renderTabBarLabel = ({ route, focused }: { route: any; focused: boolean }) => (
    <Text style={focused ? $focusedTabBarLabel : $tabBarLabel}>{route.title}</Text>
  )

  const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<any> }) => (
    <TabBar
      {...props}
      indicatorStyle={$tabIndicator}
      style={$tabBar}
      renderLabel={renderTabBarLabel}
    />
  )

  // TODO: Fix type
  const renderScene = ({ route }: { route: { key: string; title: string } }) => {
    console.log({ route })

    switch (route.key) {
      case "chapters":
        return <Chapters data={DUMMY_DATA} />
      case "content":
        return <CourseContent />
      default:
        return null
    }
  }

  return (
    <Screen
      style={$root}
      contentContainerStyle={$contentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Video
        controls
        source={{
          uri: "https://appxcontent.kaxa.in/uploadvideo2/2024-08-25/harkirat_db/2024-08-25-0.8783127696174253.mp4",
        }}
        // Store reference
        ref={videoRef}
        // // Callback when remote video is buffering
        // onBuffer={onBuffer}
        // // Callback when video cannot be loaded
        // onError={onError}
        style={$video}
      />
      <View style={videoInfo}>
        <Text numberOfLines={2} preset="subheading" text="2.5 | Promises, async/await" />
        {/* <Text text="subtitle" /> */}
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $contentContainer: ViewStyle = {
  flex: 1,
}

const videoInfo: ViewStyle = {
  gap: 8,
  padding: 16,
  backgroundColor: colors.palette.neutral800,
}
const $video: ViewStyle = {
  height: 200,
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
}

const $tabIndicator: ViewStyle = {
  backgroundColor: colors.palette.neutral300,
}

const $tabBarLabel: TextStyle = {
  color: colors.palette.neutral100,
}

const $focusedTabBarLabel: TextStyle = {
  color: colors.palette.secondary600,
  fontFamily: typography.primary.bold,
}
