import React from "react";

class useMediaQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: "",
      mediaQuery: this.props.query
    };
  }

  validateWindow = () => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia === "undefined"
    ) {
      this.setState({ match: "Error: Not posible to say." });
    } else {
      window.matchMedia("(max-width: 400px)").matches
        ? this.setState({ match: this.props.whenTrue })
        : this.setState({ match: this.props.whenFalse });
    }
  };

  componentDidMount() {
    this.validateWindow();
  }

  render() {
    return <>Responsive text: {this.state.match}</>;
  }
}

export default useMediaQuery;
