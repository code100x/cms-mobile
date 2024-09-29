import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { AutoImage, Button, Screen, Text } from "app/components"
import { AuthStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { RouteName, SCREEN_HEIGHT, SCREEN_WIDTH } from "app/constants"

interface WelcomeScreenProps extends AuthStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const navigation = useNavigation<any>()

  const handleLogin = () => {
    navigation.navigate(RouteName.Login)
  }

  return (
    <Screen preset="auto" safeAreaEdges={["top"]} contentContainerStyle={$root}>
      <AutoImage
        resizeMode="contain"
        source={require("../../assets/images/welcome-image.png")}
        style={$backgroundImage}
      />
      <View style={$logoContainer}>
        <AutoImage source={require("../../assets/icons/logo.png")} style={$logo} />
        <Text text="100xDevs" />
      </View>
      <View style={$subContainer}>
        <Text preset="heading" style={$heading}>
          Be a{" "}
          <Text preset="heading" style={$headingHighlight}>
            100xDev
          </Text>{" "}
          because 10x isn't enough
        </Text>
        <Text
          text="Unlock your potential with coding cohorts. Learn, collaborate, and grow beyond limits."
          style={$subHeading}
        />
        <Button onPress={handleLogin} text="Login" />
        <Button text="Sign Up Now" preset="outline" />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
  padding: spacing.md,
}

const $logoContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: spacing.xs,
  justifyContent: "center",
}

const $backgroundImage: ImageStyle = {
  height: SCREEN_HEIGHT,
  position: "absolute",
  width: SCREEN_WIDTH,
}

const $logo: ImageStyle = {
  height: 40,
  width: 40,
}

const $subContainer: ViewStyle = {
  gap: spacing.md,
  paddingBottom: spacing.xl,
}

const $heading: TextStyle = {
  fontSize: 32,
  lineHeight: 32,
  textAlign: "center",
}

const $headingHighlight: TextStyle = {
  color: colors.content.brand,
  fontSize: 32,
  lineHeight: 32,
}

const $subHeading: TextStyle = {
  color: colors.content.secondary,
  textAlign: "center",
}
