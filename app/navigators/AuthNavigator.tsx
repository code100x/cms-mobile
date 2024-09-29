import React from "react"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"

import { colors } from "app/theme"
import { RouteName } from "app/constants"
import * as Screens from "app/screens"

export type AuthStackParamList = {
  Login: undefined
  Welcome: undefined
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator = observer(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={RouteName.Welcome}
      screenOptions={{ headerShown: false, navigationBarColor: colors.background.primary }}
    >
      <AuthStack.Screen name={RouteName.Welcome} component={Screens.WelcomeScreen} />
      <AuthStack.Screen name={RouteName.Login} component={Screens.LoginScreen} />
    </AuthStack.Navigator>
  )
})

export default AuthNavigator
