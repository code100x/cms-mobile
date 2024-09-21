import React, { useEffect, useMemo, useRef, useState } from "react"
import { TouchableOpacity, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import Icon from "react-native-remix-icon"

import { HIT_SLOP_5 } from "app/constants"
import { Button, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: React.FC<LoginScreenProps> = observer(function LoginScreen(_props) {
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
              name={isAuthPasswordHidden ? "eye-off-line" : "eye-line"}
              color={colors.palette.neutral400}
              size={20}
            />
          </TouchableOpacity>
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    // TODO: This can be done in the login function
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    // setEmail("test@gmail.red")
    // setPassword("123456")
  }, [])

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      preset="auto"
      safeAreaEdges={["top", "bottom"]}
    >
      <Text text="100xDevs" preset="heading" style={$logIn} />
      <Text text="coz 10x ain't enough" preset="subheading" style={$enterDetails} />
      <View style={$inputContainer}>
        <TextField
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          helper={error.email}
          keyboardType="email-address"
          onChangeText={handleEmailChange}
          onSubmitEditing={focusPasswordInput}
          placeholder="Email"
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
          placeholder="Password"
          ref={authPasswordInput}
          RightAccessory={PasswordRightAccessory}
          secureTextEntry={isAuthPasswordHidden}
          status={error.password ? "error" : undefined}
          value={password}
        />
      </View>
      <Button onPress={handleLogin} text="Login" />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $logIn: TextStyle = {
  marginBottom: spacing.sm,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
}

const $inputContainer: ViewStyle = {
  gap: spacing.lg,
  marginBottom: spacing.lg,
}
