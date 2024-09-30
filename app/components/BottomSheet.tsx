import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import ActionSheet from "react-native-actions-sheet"

import { $styles, colors, spacing, typography } from "app/theme"
import { IBottomSheetType } from "app/utils"

import { Button } from "./Button"
import { Text } from "./Text"

export interface BottomSheetProps {
  /** a required prop that gives the data to be rendered on the action sheet */
  payload: IBottomSheetType
  /** a required prop that gives the id of the current action sheet */
  sheetId: string
}

export const BottomSheet = observer(function BottomSheet(props: BottomSheetProps) {
  const { sheetId, payload } = props
  const {
    children,
    confirmButtonPreset = "destructive",
    confirmButtonText = "Confirm",
    icon: Icon,
    iconColor = colors.content.negative,
    onCancel,
    onConfirm,
    subtitle,
    title,
  } = payload

  return (
    <ActionSheet gestureEnabled indicatorStyle={$indicator} containerStyle={$root} id={sheetId}>
      <View style={$container}>
        {Icon && <Icon size={32} color={iconColor} />}
        <Text preset="subheading" style={$text}>
          {title}
        </Text>
        <Text style={$subtext}>{subtitle}</Text>
        {children}
        <View style={$buttonsContainer}>
          {onCancel && (
            <Button onPress={onCancel} preset="outline" style={$styles.flex1} text="Cancel" />
          )}
          <Button
            onPress={onConfirm}
            preset={confirmButtonPreset}
            style={$styles.flex1}
            text={confirmButtonText}
          />
        </View>
      </View>
    </ActionSheet>
  )
})

const $root: ViewStyle = {
  backgroundColor: colors.background.primary,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopColor: colors.border.default,
  borderTopLeftRadius: spacing.lg,
  borderTopRightRadius: spacing.lg,
  borderTopWidth: 1,
}

const $indicator: ViewStyle = {
  backgroundColor: colors.background.secondary,
  height: spacing.xs,
  marginVertical: spacing.xs,
  width: 100,
}

const $container: ViewStyle = {
  alignItems: "center",
  padding: spacing.md,
}

const $text: TextStyle = {
  color: colors.content.primary,
  fontFamily: typography.primary.bold,
  marginBottom: spacing.xxxs,
  marginTop: spacing.md,
  textAlign: "center",
}

const $subtext: TextStyle = {
  color: colors.content.secondary,
  fontFamily: typography.primary.medium,
  fontSize: 14,
  lineHeight: 20,
  marginBottom: spacing.md,
  textAlign: "center",
}

const $buttonsContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  justifyContent: "space-between",
}
