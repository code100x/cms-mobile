import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { BookmarkIcon } from "lucide-react-native"

import { TabScreenProps } from "app/navigators"
import { ContentCard, EmptyPlaceholder, ListView, Screen, Text } from "app/components"
import { $styles, spacing } from "app/theme"
import { ContentType } from "app/constants"

interface BookmarksScreenProps extends TabScreenProps<"Bookmarks"> {}

const renderBookmarkItem = () => <ContentCard type={ContentType.Video} showDeleteIcon />

const renderSeparator = () => <View style={$separator} />

const renderEmptyPlaceholder = (
  <EmptyPlaceholder
    icon={BookmarkIcon}
    subtext="You haven't bookmarked any videos yet. Start saving your favorite lectures for easy access later."
    text="No Bookmarks Yet"
  />
)

export const BookmarksScreen: FC<BookmarksScreenProps> = observer(function BookmarksScreen() {
  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Bookmarks" style={$heading} />
      <ListView
        contentContainerStyle={$listContainer}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        estimatedItemSize={20}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyPlaceholder}
        renderItem={renderBookmarkItem}
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

const $listContainer: ViewStyle = {
  paddingBottom: spacing.md,
}

const $separator: ViewStyle = {
  marginVertical: spacing.xs,
}
