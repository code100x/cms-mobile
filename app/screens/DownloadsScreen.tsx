import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { DownloadIcon } from "lucide-react-native"

import { $styles, spacing } from "app/theme"
import { EmptyPlaceholder, ListView, Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators"

interface DownloadsScreenProps extends TabScreenProps<"Downloads"> {}

const renderEmptyPlaceholder = (
  <EmptyPlaceholder
    icon={DownloadIcon}
    subtext="You haven’t downloaded any lectures yet. Download now to watch offline at your convenience."
    text="No Lecture Downloads"
  />
)

export const DownloadsScreen: FC<DownloadsScreenProps> = observer(function DownloadsScreen() {
  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Downloads" style={$heading} />
      <ListView
        data={[]}
        estimatedItemSize={50}
        ListEmptyComponent={renderEmptyPlaceholder}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $heading: TextStyle = {
  marginBottom: spacing.md,
}
