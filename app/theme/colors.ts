// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  // ----------- 100xDevs -----------
  // Slate
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  slate950: "#020817",

  // Blue
  blue50: "#F3F8FF",
  blue100: "#C8DBFF",
  blue200: "#9EBCFF",
  blue300: "#749CFF",
  blue400: "#4E7AFF",
  blue500: "#3259E8",
  blue600: "#213FC0",
  blue700: "#152C8C",
  blue800: "#0D1D57",
  blue900: "#050C2A",
  blue950: "#000208",

  // Green
  green50: "#F0FCF2",
  green100: "#D8EDDC",
  green200: "#9DCBA8",
  green300: "#6EBA81",
  green400: "#3D9C5C",
  green500: "#00823E",
  green600: "#006629",
  green700: "#00419C",
  green800: "#021407", // same in figma
  green900: "#021407",
  green950: "#000201",

  // Red
  red50: "#FFF4F1",
  red100: "#FDDAD5",
  red200: "#F5A79A",
  red300: "#EC7C6B",
  red400: "#DD503F",
  red500: "#C32518",
  red600: "#9E0200",
  red700: "#730300",
  red800: "#480804",
  red900: "#220402",
  red950: "#060000",

  // Orange
  orange50: "#FFF7ED",
  orange100: "#FFEDD5",
  orange200: "#FED7AA",
  orange300: "#FDBA74",
  orange400: "#FB923C",
  orange500: "#F97316",
  orange600: "#EA580C",
  orange700: "#C2410C",
  orange800: "#9A3412",
  orange900: "#7C2D12",
  orange950: "#431407",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /** A helper for making something see-thru. */
  transparent: "rgba(0, 0, 0, 0)",
  /** The default text color in many components. */
  text: palette.neutral800,
  /** Secondary text information. */
  textDim: palette.neutral600,
  /** The default color of the screen background. */
  background: palette.neutral200,
  /** The main tinting color. */
  tint: palette.primary500,
  /** A subtle color used for lines. */
  separator: palette.neutral300,
  /** Error messages. */
  error: palette.angry500,
  /** Error Background. */
  errorBackground: palette.angry100,

  /** -------- 100xDevs ----------- */
  primary: palette.slate950,
  secondary: palette.slate900,
  border: palette.slate800,
  brand: palette.blue400,
}
