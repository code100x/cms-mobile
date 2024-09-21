import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"

interface IconProps extends TouchableOpacityProps {
  /** An optional tint color for the icon */
  color?: string
  /** An optional size for the icon. If not provided, the icon will be sized to the icon's resolution. */
  size?: number
  /** Style overrides for the icon image */
  style?: StyleProp<ImageStyle>
  /** Style overrides for the icon container */
  containerStyle?: StyleProp<ViewStyle>
  /** An optional function to be called when the icon is pressed */
  onPress?: TouchableOpacityProps["onPress"]
  /** Source of the icon */
  source: string
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Icon/}
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {JSX.Element} The rendered `Icon` component.
 */
export function Icon(props: IconProps) {
  const {
    source,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image style={$imageStyle} source={{ uri: source }} />
    </Wrapper>
  )
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
