import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface EmptyPlaceholderProps {
  /** a required prop to specify the icon. */
  icon: React.ElementType
  /** an optional style override useful for padding & margin. */
  style?: StyleProp<ViewStyle>
  /** a required prop to specify the subtext. */
  subtext: string
  /** a required prop to specify the text. */
  text: string
}

export const EmptyPlaceholder = observer(function EmptyPlaceholder(props: EmptyPlaceholderProps) {
  const { icon: Icon, style, subtext, text } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Icon color={colors.content.secondary} size={32} />
      <Text preset="subheading" style={$text} text={text} />
      <Text size="xs" style={$subtext} text={subtext} />
    </View>
  )
})

const $container: ViewStyle = {
  alignItems: "center",
  borderColor: colors.border.default,
  borderRadius: spacing.md,
  borderWidth: 1,
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
  paddingVertical: 100,
}

const $text: TextStyle = {
  fontFamily: typography.primary.bold,
  marginBottom: spacing.xxxs,
  marginTop: spacing.sm,
  textAlign: "center",
}

const $subtext: TextStyle = {
  color: colors.content.secondary,
  textAlign: "center",
}
