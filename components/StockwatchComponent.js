import React from "react";
import PropTypes from "prop-types";
import { View, SafeAreaView, Text } from "react-native";
class StockWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "stockWatch",
  };
  render() {
    return (
      <View>
        {/* Search bar  */}
        <View></View>
        {/* Carousel */}
        <View></View>
        {/* Stock Detail */}
        <View></View>
      </View>
    );
  }
}

export default StockWatch;
