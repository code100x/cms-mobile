import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AuthStackScreenProps, goBack } from "app/navigators"
import { colors, spacing } from "app/theme"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { useSignup } from "app/hooks/useSignup"
import { useNavigation } from "@react-navigation/native"
import { RouteName } from "app/constants"

interface SignupScreenProps extends AuthStackScreenProps<"Signup"> {}

export const SignupScreen: FC<SignupScreenProps> = observer(function SignupScreen() {
  const navigation = useNavigation<any>()

  const {
    authPasswordInput,
    error,
    focusPasswordInput,
    handleEmailChange,
    handleSignup,
    handlePasswordChange,
    handleUsernameChange,
    handleConfirmPasswordChange,
    isAuthPasswordHidden,
    email,
    password,
    username,
    confirmPassword,
    PasswordRightAccessory,
  } = useSignup()
  return (
    <Screen style={$root} preset="auto">
      <Header
        backgroundColor={colors.background.primary}
        leftIcon="caretLeft"
        leftIconColor={colors.content.secondary}
        onLeftPress={goBack}
      />
      <Text text="Create New Account" preset="heading" />
      <Text
        style={$subheading}
        text="Create a new account to access all new coding cohorts and begin your journey."
      />
      <TextField
        autoCapitalize="none"
        autoComplete="username"
        autoCorrect={false}
        helper={error.username}
        keyboardType="name-phone-pad"
        onChangeText={handleUsernameChange}
        onSubmitEditing={focusPasswordInput}
        label="Username."
        placeholder="Enter Username"
        status={error.username ? "error" : undefined}
        value={username}
      />
      <TextField
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        helper={error.email}
        keyboardType="email-address"
        onChangeText={handleEmailChange}
        onSubmitEditing={focusPasswordInput}
        label="Email Address / Phone no."
        placeholder="Enter Email Address / Phone no."
        status={error.email ? "error" : undefined}
        value={email}
      />
      <TextField
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        helper={error.password}
        onChangeText={handlePasswordChange}
        onSubmitEditing={handleSignup}
        label="Password"
        placeholder="Enter Password"
        ref={authPasswordInput}
        RightAccessory={PasswordRightAccessory}
        secureTextEntry={isAuthPasswordHidden}
        status={error.password ? "error" : undefined}
        value={password}
        containerStyle={$passwordFieldContainer}
      />
      <TextField
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        helper={error.confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        onSubmitEditing={handleSignup}
        label="Confirm Password"
        placeholder="Re-Enter Password"
        ref={authPasswordInput}
        RightAccessory={PasswordRightAccessory}
        secureTextEntry={isAuthPasswordHidden}
        status={error.confirmPassword ? "error" : undefined}
        value={confirmPassword}
        containerStyle={$passwordFieldContainer}
      />
      <Button onPress={handleSignup} style={$button} text="Sign up" />
      <View style={$footer}>
        <Text style={$helperText} text="Already have an account?" preset="formHelper" />
        <Text
          onPress={() => navigation.navigate(RouteName.Login)}
          style={$helperTextLink}
          text="Login"
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  backgroundColor: colors.background.primary,
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $subheading: TextStyle = {
  color: colors.content.secondary,
  marginBottom: spacing.md,
  marginTop: spacing.xxs,
}

const $passwordFieldContainer: ViewStyle = {
  marginTop: spacing.md,
}

const $button: ViewStyle = {
  marginTop: spacing.xl,
  marginBottom: spacing.md,
}

const $footer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: spacing.xxs,
  justifyContent: "center",
}

const $helperText: TextStyle = {
  color: colors.content.secondary,
}

const $helperTextLink: TextStyle = {
  color: colors.content.brand,
}
