import React from "react";
import Saved from "./SavedComponent";
import StockDetail from "./StockDetailComponent";
import StockWatch from "./StockwatchComponent";
import { View, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

const stockWatch = createStackNavigator({
    stockWatch: StockWatch,
}, {
        defaultNavigationOptions=({ navigation }) => {
        initialRouteName:"stockWatch"
    }
});
const userStock = createStackNavigator({
    saved: Saved,
    stockDetail: StockDetail,
}, {});
const drawer = createDrawerNavigator(
  {
        userStock: {
          screen: userStock,
          defaultNavigationOptions: ({ navigation }) => ({
              headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
            })
    },
    stockWatch: {
          screen: stockWatch,
          defaultNavigationOptions: ({ navigation }) => ({
              headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
            })
    },
  },
  {
    initialRouteName: "stockWatch",
    drawerBackgroundColor: "white",
  }
);
const App = createAppContainer(drawer);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <App />
      </SafeAreaView>
    );
  }
}

export default Main;
