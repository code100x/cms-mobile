import { View, ViewStyle, TextStyle } from "react-native"
import React from "react"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"

import { ListItem } from "./ListItem"
import { ListView } from "./ListView"
import { Text } from "./Text"

interface ChaptersProps {
  // TODO: This will be coming from the store
  data: Array<{ start: number; end: number; title: string; timeStamp: string }>
}

const Timestamp = ({ item }: { item: { start: number; end: number } }) => (
  <View style={$timestampContainer}>
    <Text style={$timestamp} text={`${item.start} to ${item.end}`} />
  </View>
)

const renderItem = ({
  item,
  index,
}: {
  item: { start: number; end: number; title: string; timeStamp: string }
  index: number
}) => (
  <ListItem
    activeOpacity={0.8}
    containerStyle={$listContainer}
    LeftComponent={<Text style={$chapter} text={`${index + 1}. ${item.title}`} />}
    RightComponent={<Timestamp item={item} />}
    style={$listItem}
  />
)

const renderSeparator = () => <View style={$separator} />

const keyExtractor = (item: { start: number; end: number; title: string }) => item.title

export const Chapters = React.memo(
  observer((props: ChaptersProps) => {
    const { data } = props

    return (
      <ListView
        data={data}
        estimatedItemSize={30}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={$contentContainer}
      />
    )
  }),
)

const $contentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingBottom: spacing.xl,
}

const $listContainer: ViewStyle = {
  paddingHorizontal: spacing.md,
  backgroundColor: colors.background.secondary,
  borderRadius: spacing.sm,
}

const $separator: ViewStyle = {
  marginTop: 16,
}

const $listItem: ViewStyle = {
  alignItems: "center",
}

const $chapter: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  flex: 4,
}

const $timestampContainer: ViewStyle = {
  backgroundColor: "#3B82F61A", // its not in the palette
  borderRadius: spacing.xs,
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
}

const $timestamp: TextStyle = {
  color: colors.content.brand,
  fontSize: 14,
  lineHeight: 20,
}
