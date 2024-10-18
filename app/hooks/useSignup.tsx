import React, { useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TouchableOpacity } from "react-native"
import { useStores } from "app/models"
import { HIT_SLOP_5 } from "app/constants"
import { Icon, TextFieldAccessoryProps } from "app/components"
import { colors } from "app/theme"

export function useSignup() {
  const { userStore } = useStores()
  const {
    signup,
    setEmail,
    setPassword,
    setUsername,
    email,
    password,
    username,
    validationEmail,
    validationPassword,
    validationUsername,
  } = userStore
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const [error, setError] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  })

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const authPasswordInput = useRef<TextInput>(null)

  const focusPasswordInput = () => authPasswordInput.current?.focus()

  const togglePasswordVisibility = () => {
    setIsAuthPasswordHidden(!isAuthPasswordHidden)
  }
  const validateConfirmPassword =
    confirmPassword.length === 0
      ? "can't be blank"
      : confirmPassword !== password
      ? "password don't match"
      : ""

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

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text)
    if (error.confirmPassword) {
      setError((prevError) => ({ ...prevError, confirmPassword: "" }))
    }
  }

  const handleUsernameChange = (text: string) => {
    setUsername(text)
    if (error.username) {
      setError((prevError) => ({ ...prevError, username: "" }))
    }
  }

  const validateSignupDetails = () => {
    const emailError = validationEmail
    const usernameError = validationUsername
    const passwordError = validationPassword
    const confirmPasswordError = validateConfirmPassword

    const newErrors = {
      email: emailError,
      password: passwordError,
      username: usernameError,
      confirmPassword: confirmPasswordError,
    }

    setError((prevError) => ({ ...prevError, ...newErrors }))

    return !Object.values(newErrors).some((error) => error)
  }

  const handleSignup = async () => {
    const isSignupDataValid = validateSignupDetails()

    if (!isSignupDataValid) return

    await signup()
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
      setUsername("test1234")
      setPassword("123456")
      setConfirmPassword("123456")
    }
    // TODO: This can be done in the login function [Good UX] maintenance
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    // setEmail("test@gmail.red")
    // setPassword("123456")
  }, [])

  return {
    authPasswordInput,
    error,
    focusPasswordInput,
    handleEmailChange,
    handleSignup,
    handlePasswordChange,
    handleUsernameChange,
    handleConfirmPasswordChange,
    setConfirmPassword,
    isAuthPasswordHidden,
    email,
    password,
    username,
    confirmPassword,
    PasswordRightAccessory,
  }
}
