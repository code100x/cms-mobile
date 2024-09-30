import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import {
  CheckIcon,
  FileTextIcon,
  FolderIcon,
  PlayCircleIcon,
  Trash2Icon,
} from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"

import { ContentType, HIT_SLOP_10, RouteName } from "app/constants"
import { colors, spacing } from "app/theme"
import { Text } from "app/components/Text"
import { closeBottomSheet, openBottomSheet } from "app/utils"

export interface ContentCardProps {
  /** an optional prop to mark the content as completed. */
  isCompleted?: boolean
  /** an optional prop to show the delete icon. */
  showDeleteIcon?: boolean
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
  /** a required prop to specify the content type. */
  type: ContentType
}

const renderContentIcon = (type: ContentType) => {
  let Icon = FolderIcon

  switch (type) {
    case ContentType.Video:
      Icon = PlayCircleIcon
      break
    case ContentType.Notion:
      Icon = FileTextIcon
      break
  }

  return (
    <View style={$contentIconContainer}>
      <Icon color={colors.content.secondary} size={24} />
    </View>
  )
}

export const ContentCard = observer(function ContentCard(props: ContentCardProps) {
  const { isCompleted = false, showDeleteIcon = false, style, type } = props

  // TODO: Fix this type inference
  const navigation = useNavigation<any>()

  const $styles = [$container, style]

  const handleCardPress = () => {
    // TODO: Remove this post API integration
    console.log({ type })

    if (type === ContentType.Video) {
      navigation.navigate(RouteName.VideoPlayer)
    } else if (type === ContentType.Folder) {
      // TODO: the type here will be coming from the content's data
      // navigation.push(RouteName.ContentView, { type })
      navigation.push(RouteName.ContentView, { type: ContentType.Video })
    }
  }

  const handleDeletePress = () => {
    openBottomSheet({
      confirmButtonText: "Delete",
      icon: Trash2Icon,
      onCancel: closeBottomSheet,
      onConfirm: () => {
        // TODO: API/Logic to delete the content
        closeBottomSheet()
      },
      subtitle: "Are you sure? This action can't be undone.",
      title: "Confirm Deletion",
    })
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleCardPress} style={$styles}>
      <View style={$subContainer}>
        {renderContentIcon(type)}
        <View style={$titleContainer}>
          <Text text="HTML Introduction" />
          <Text style={$subtitle} text="Last Updated : 10 Aug 24" />
        </View>
      </View>
      {showDeleteIcon && (
        <TouchableOpacity activeOpacity={0.8} hitSlop={HIT_SLOP_10} onPress={handleDeletePress}>
          <Trash2Icon color={colors.content.negative} size={16} />
        </TouchableOpacity>
      )}
      {!showDeleteIcon && isCompleted && (
        <CheckIcon color={colors.content.white} size={20} style={$checkIcon} />
      )}
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.background.secondary,
  borderColor: colors.border.default,
  borderRadius: spacing.md,
  borderWidth: 1,
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "space-between",
  padding: spacing.md,
}

const $subContainer: ViewStyle = {
  alignItems: "center",
  flex: 1,
  flexDirection: "row",
  gap: spacing.sm,
}

const $contentIconContainer: ViewStyle = {
  borderColor: colors.border.default,
  borderRadius: spacing.sm,
  borderWidth: 1,
  padding: spacing.md,
}

const $titleContainer: ViewStyle = {
  flex: 1,
}

const $subtitle: TextStyle = {
  color: colors.content.secondary,
  fontSize: 14,
  lineHeight: 20,
}

const $checkIcon: ViewStyle = {
  backgroundColor: colors.background.positive,
  borderRadius: 10,
  height: 20,
  overflow: "hidden",
  padding: spacing.xxxs,
}
