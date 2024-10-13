import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { AuthStackScreenProps, goBack } from "app/navigators"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { colors, spacing, typography } from "app/theme"
import { useLogin } from "app/hooks"

interface LoginScreenProps extends AuthStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const {
    authPasswordInput,
    email,
    error,
    focusPasswordInput,
    handleEmailChange,
    handleLogin,
    handlePasswordChange,
    isAuthPasswordHidden,
    password,
    PasswordRightAccessory,
  } = useLogin()

  return (
    <Screen style={$root} preset="auto">
      <Header
        backgroundColor={colors.background.primary}
        leftIcon="caretLeft"
        leftIconColor={colors.content.secondary}
        onLeftPress={goBack}
      />
      <Text text="Login Now" preset="heading" />
      <Text
        style={$subheading}
        text="Log in to access your coding cohorts and continue your journey."
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
        onSubmitEditing={handleLogin}
        label="Password"
        placeholder="Enter Password"
        ref={authPasswordInput}
        RightAccessory={PasswordRightAccessory}
        secureTextEntry={isAuthPasswordHidden}
        status={error.password ? "error" : undefined}
        value={password}
        containerStyle={$passwordFieldContainer}
      />
      <Text text="Forgot Password?" preset="formHelper" style={$forgotPasswordText} />
      <Button onPress={handleLogin} style={$button} text="Login" />
      <View style={$footer}>
        <Text style={$helperText} text="Don't have an account?" preset="formHelper" />
        <Text style={$helperTextLink} text="Sign Up" />
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

const $forgotPasswordText: TextStyle = {
  color: colors.content.brand,
  fontFamily: typography.primary.normal,
  fontSize: 14,
  lineHeight: 20,
  marginTop: spacing.xs,
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
