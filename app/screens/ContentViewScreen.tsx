import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { AppStackScreenProps } from "app/navigators"
import { ContentCard, Header, ListView, Screen, Text } from "app/components"
import { $styles, colors, spacing } from "app/theme"
import { ContentType } from "app/constants"

interface ContentViewScreenProps extends AppStackScreenProps<"ContentView"> {}

const renderSeparator = () => {
  return <View style={$separator} />
}

export const ContentViewScreen: FC<ContentViewScreenProps> = observer(function ContentViewScreen(
  props,
) {
  const navigation = useNavigation()

  const contentType = props.route.params?.type

  // TODO: Remove this post API integration
  console.log({ contentType })

  const renderContent = () => {
    // TODO: the type will be coming from the content's data
    return <ContentCard type={contentType || ContentType.Folder} />
  }

  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1}>
      <Header
        onLeftPress={navigation.goBack}
        leftText="Back"
        backgroundColor={colors.background.primary}
        leftIcon="caretLeft"
        leftIconColor={colors.content.secondary}
      />
      <Text preset="subheading" text="Cohort 3.0 | Web Dev" />
      <ListView
        // keyExtractor={(item) => item.id}
        contentContainerStyle={$listContainer}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        estimatedItemSize={50}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderContent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $listContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingBottom: spacing.xl,
}

const $separator: ViewStyle = {
  marginVertical: spacing.xs,
}
