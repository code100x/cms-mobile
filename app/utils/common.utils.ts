import { SheetManager } from "react-native-actions-sheet"

import { ButtonPresets } from "app/components"

export interface IBottomSheetType {
  children?: React.ReactNode
  confirmButtonPreset?: ButtonPresets
  confirmButtonText?: string
  icon?: React.ElementType
  iconColor?: string
  onCancel?: () => void
  onConfirm?: () => void
  subtitle: string
  title?: string
}

export const closeBottomSheet = async () => {
  await SheetManager.hide("BottomSheet")
}

export const openBottomSheet = (props: IBottomSheetType) => {
  const {
    children,
    confirmButtonPreset,
    confirmButtonText,
    icon,
    onCancel,
    iconColor,
    onConfirm,
    subtitle,
    title,
  } = props

  SheetManager.show("BottomSheet", {
    payload: {
      children,
      confirmButtonPreset,
      confirmButtonText,
      icon,
      iconColor,
      onCancel,
      onConfirm,
      subtitle,
      title,
    },
  })
}
