import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "constants/Styles";
import { MonoText } from "components/StyledText";
import { LanguageContext } from "utils/LanguageProvider";

export default function HomeScreen() {
  const { translations } = React.useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require("@assets/images/robot-dev.png")
                : require("@assets/images/robot-prod.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>{translations.OPEN_UP}</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            {translations.CHANGE_ANY_TEXT}
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>{translations.HELP}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>{translations.TAB_BAR_INFO}</Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            navigation/BottomTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  const { translations } = React.useContext(LanguageContext);

  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        {translations.LEARN_MORE}
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        {translations.DEV_MODE}
        {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        {translations.DEV_MODE_NOT}
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}
