import React from "react";
import PropTypes from "prop-types";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Saved Stocks",
  };
  render() {
    return <div></div>;
  }
}

Saved.propTypes = {};

export default Saved;
