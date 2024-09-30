import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import WebView from "react-native-webview"

import { AppStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { $styles } from "app/theme"

interface WebviewScreenProps extends AppStackScreenProps<"Webview"> {}

export const WebviewScreen: FC<WebviewScreenProps> = observer(function WebviewScreen(props) {
  const url = props.route.params?.url

  return (
    <Screen contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <WebView
        showsVerticalScrollIndicator={false}
        allowsInlineMediaPlayback
        source={{ uri: url }}
        startInLoadingState
        style={$styles.flex1}
      />
    </Screen>
  )
})
