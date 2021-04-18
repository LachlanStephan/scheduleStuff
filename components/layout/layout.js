import react, { Component } from "react";
import Header from "../../pages/common/header";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout min-h-screen w-full bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-400 absolute top-0">
        {children}
        <Header />
      </div>
    );
  }
}
