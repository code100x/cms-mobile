import { View, ViewStyle, TextStyle } from "react-native"
import React from "react"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"

import { ListItem } from "./ListItem"
import { ListView } from "./ListView"
import { Text } from "./Text"

interface ChaptersProps {
  // TODO: This will be coming from the store
  data: Array<{ start: number; end: number; title: string; timeStamp: string }>
}

const renderItem = ({
  item,
}: {
  item: { start: number; end: number; title: string; timeStamp: string }
}) => (
  <ListItem
    activeOpacity={0.8}
    containerStyle={$listContainer}
    LeftComponent={<Text style={$listLeftComponent} text={item.title} />}
    RightComponent={<Text text={item.timeStamp} />}
    style={$listItem}
  />
)

const renderSeparator = () => <View style={$separator} />

const keyExtractor = (item: { start: number; end: number; title: string }) => item.title

export const Chapters = React.memo(
  observer((props: ChaptersProps) => {
    const { data } = props

    return (
      <View style={$root}>
        <ListView
          data={data}
          estimatedItemSize={30}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    )
  }),
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
}

const $separator: ViewStyle = {
  borderWidth: 0.25,
  borderColor: colors.palette.neutral700,
}

const $listItem: ViewStyle = {
  alignItems: "center",
}

const $listContainer: ViewStyle = {
  paddingHorizontal: 16,
}

const $listLeftComponent: TextStyle = {
  flex: 4,
  paddingVertical: 16,
}
