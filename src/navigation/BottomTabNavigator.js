import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "components/TabBarIcon";
import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";
import { LanguageContext } from "utils/LanguageProvider";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  const { translations } = React.useContext(LanguageContext);
  React.useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: translations.GET_STARTED,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-code-working' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: translations.SETTINGS,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-settings' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Settings":
      return "Settings";
  }
}
