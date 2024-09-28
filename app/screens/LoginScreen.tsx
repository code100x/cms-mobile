import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Button,
  Header,
  Icon,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
} from "app/components"
import { colors, spacing, typography } from "app/theme"
import { useStores } from "app/models"
import { HIT_SLOP_5 } from "app/constants"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  const { userStore } = useStores()
  const { login, setEmail, setPassword, email, password, validationEmail, validationPassword } =
    userStore

  const [error, setError] = useState({
    email: "",
    password: "",
  })

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

  const authPasswordInput = useRef<TextInput>(null)

  const focusPasswordInput = () => authPasswordInput.current?.focus()

  const handleEmailChange = (text: string) => {
    setEmail(text)
    if (error.email) {
      setError((prevError) => ({ ...prevError, email: "" }))
    }
  }

  const handlePasswordChange = (text: string) => {
    setPassword(text)
    if (error.password) {
      setError((prevError) => ({ ...prevError, password: "" }))
    }
  }

  // TODO: Can use Zod instead, need confirmation
  const validateLoginData = () => {
    const emailError = validationEmail
    const passwordError = validationPassword
    const newErrors = { email: emailError, password: passwordError }

    setError({ ...error, ...newErrors })

    return !Object.values(newErrors).some((error) => error)
  }

  const handleLogin = async () => {
    const isLoginDataValid = validateLoginData()

    // if the data ins't valid, return
    if (!isLoginDataValid) return

    await login()
  }

  const PasswordRightAccessory: React.ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            hitSlop={HIT_SLOP_5}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
            style={props.style}
          >
            <Icon
              icon={isAuthPasswordHidden ? "view" : "hidden"}
              color={colors.border.default}
              size={20}
            />
          </TouchableOpacity>
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    if (__DEV__) {
      setEmail("testuser@example.com")
      setPassword("123456")
    }
    // TODO: This can be done in the login function [Good UX] maintenance
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    // setEmail("test@gmail.red")
    // setPassword("123456")
  }, [])

  return (
    <Screen style={$root} preset="auto">
      <Header
        backgroundColor={colors.background.primary}
        leftIcon="caretLeft"
        leftIconColor={colors.content.secondary}
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
