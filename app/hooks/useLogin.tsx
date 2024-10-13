import React, { useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TouchableOpacity } from "react-native"
import { useStores } from "app/models"
import { HIT_SLOP_5 } from "app/constants"
import { Icon, TextFieldAccessoryProps } from "app/components"
import { colors } from "app/theme"

export function useLogin() {
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

  const togglePasswordVisibility = () => {
    setIsAuthPasswordHidden(!isAuthPasswordHidden)
  }

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

  const validateLoginData = () => {
    const emailError = validationEmail
    const passwordError = validationPassword
    const newErrors = { email: emailError, password: passwordError }

    setError((prevError) => ({ ...prevError, ...newErrors }))

    return !Object.values(newErrors).some((error) => error)
  }

  const handleLogin = async () => {
    const isLoginDataValid = validateLoginData()

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
            onPress={togglePasswordVisibility}
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

  return {
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
  }
}
