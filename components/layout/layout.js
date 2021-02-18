import react, { Component } from "react";
import Header from "../../pages/common/header";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header link1="Home" link2="Schedule" link3="Login" link4="Register" />
        {children}
      </div>
    );
  }
}
