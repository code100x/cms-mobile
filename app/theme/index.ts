import { colors } from "./colors"
import { spacing } from "./spacing"
import { timing } from "./timing"
import { typography } from "./typography"

// This supports "light" and "dark" themes by default. If undefined, it'll use the system theme
export type ThemeContexts = "light" | "dark" | undefined

// Because we have two themes, we need to define the types for each of them.
// colorsLight and colorsDark should have the same keys, but different values.
export type Colors = typeof colors
// The spacing type needs to take into account the different spacing values for light and dark themes.
export type Spacing = typeof spacing

// These two are consistent across themes.
export type Timing = typeof timing
export type Typography = typeof typography

// The overall Theme object should contain all of the data you need to style your app.
export interface Theme {
  colors: Colors
  spacing: Spacing
  typography: Typography
  timing: Timing
  isDark: boolean
}

export type ThemedStyle<T> = (theme: Theme) => T

export * from "./colors"
export * from "./spacing"
export * from "./styles"
export * from "./timing"
export * from "./typography"
