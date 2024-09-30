import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { SectionList, TextStyle, View, ViewStyle } from "react-native"
import { HistoryIcon } from "lucide-react-native"

import { TabScreenProps } from "app/navigators"
import { ContentCard, EmptyPlaceholder, Screen, Text } from "app/components"
import { $styles, colors, spacing, typography } from "app/theme"
import { ContentType, SECTIONS_DATA } from "app/constants"

interface HistoryScreenProps extends TabScreenProps<"History"> {}

const renderHistoryItem = () => <ContentCard type={ContentType.Video} isCompleted />

const renderSeparator = () => <View style={$separator} />

const renderSectionHeader = ({ section }: { section: { title: string } }) => (
  <Text style={$sectionHeader} text={section.title} />
)

const renderEmptyPlaceholder = (
  <EmptyPlaceholder
    icon={HistoryIcon}
    subtext="It looks like you haven’t watched any videos yet. Start learning now to see your recently watched content here."
    text="No Watch History"
  />
)

export const HistoryScreen: FC<HistoryScreenProps> = observer(function HistoryScreen() {
  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Watch History" style={$heading} />
      <SectionList
        contentContainerStyle={$listContainer}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyPlaceholder}
        renderItem={renderHistoryItem}
        renderSectionHeader={renderSectionHeader}
        sections={SECTIONS_DATA}
        SectionSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
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

const $sectionHeader: TextStyle = {
  color: colors.content.secondary,
  fontFamily: typography.primary.medium,
}

const $separator: ViewStyle = {
  marginTop: spacing.md,
}
