import react, { Component } from "react";
import Header from "../../pages/common/header";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout w-full">
        {children}
        <Header />
      </div>
    );
  }
}
