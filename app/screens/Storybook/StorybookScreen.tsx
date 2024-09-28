import React, { FC, ReactElement, useEffect, useRef } from "react"
import { SectionList, TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { TxKeyPath, translate } from "../../i18n"
// import { DemoTabParamList, DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { spacing } from "../../theme"
import * as Demos from "./demos"
import { AppStackScreenProps } from "app/navigators"

export interface Demo {
  name: string
  description: TxKeyPath
  data: ReactElement[]
}

// const slugify = (str: string) =>
//   str
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/[\s_-]+/g, "-")
//     .replace(/^-+|-+$/g, "")

export const StorybookScreen: FC<AppStackScreenProps<"Storybook">> = function StorybookScreen(
  _props,
) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const listRef = useRef<SectionList>(null)
  // const route = useRoute<RouteProp<DemoTabParamList, "DemoShowroom">>()
  // const params = route.params

  // handle Web links
  // React.useEffect(() => {
  //   if (params !== undefined && Object.keys(params).length > 0) {
  //     const demoValues = Object.values(Demos)
  //     const findSectionIndex = demoValues.findIndex(
  //       (x) => x.name.toLowerCase() === params.queryIndex,
  //     )
  //     let findItemIndex = 0
  //     if (params.itemIndex) {
  //       try {
  //         findItemIndex =
  //           demoValues[findSectionIndex].data.findIndex(
  //             (u) => slugify(u.props.name) === params.itemIndex,
  //           ) + 1
  //       } catch (err) {
  //         console.error(err)
  //       }
  //     }
  //     handleScroll(findSectionIndex, findItemIndex)
  //   }
  // }, [params])

  // const handleScroll = (sectionIndex: number, itemIndex = 0) => {
  //   listRef.current?.scrollToLocation({
  //     animated: true,
  //     itemIndex,
  //     sectionIndex,
  //   })
  //   toggleDrawer()
  // }

  const scrollToIndexFailed = (info: {
    index: number
    highestMeasuredFrameIndex: number
    averageItemLength: number
  }) => {
    listRef.current?.getScrollResponder()?.scrollToEnd()
    timeout.current = setTimeout(
      () =>
        listRef.current?.scrollToLocation({
          animated: true,
          itemIndex: info.index,
          sectionIndex: 0,
        }),
      50,
    )
  }

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <SectionList
        ref={listRef}
        contentContainerStyle={$sectionListContentContainer}
        stickySectionHeadersEnabled={false}
        sections={Object.values(Demos)}
        renderItem={({ item }) => item}
        renderSectionFooter={() => <View style={$demoUseCasesSpacer} />}
        ListHeaderComponent={
          <View style={$heading}>
            <Text preset="heading" tx="demoShowroomScreen.jumpStart" />
          </View>
        }
        onScrollToIndexFailed={scrollToIndexFailed}
        renderSectionHeader={({ section }) => {
          return (
            <View>
              <Text preset="heading" style={$demoItemName}>
                {section.name}
              </Text>
              <Text style={$demoItemDescription}>{translate(section.description)}</Text>
            </View>
          )
        }}
      />
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $sectionListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
}

const $heading: ViewStyle = {
  marginBottom: spacing.xxxl,
}

const $demoItemName: TextStyle = {
  fontSize: 24,
  marginBottom: spacing.md,
}

const $demoItemDescription: TextStyle = {
  marginBottom: spacing.xxl,
}

const $demoUseCasesSpacer: ViewStyle = {
  paddingBottom: spacing.xxl,
}

// @demo remove-file
