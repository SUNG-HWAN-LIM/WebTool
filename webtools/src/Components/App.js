import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Header/Header";

class App extends Component {
  render() {
    return (
      <>
        <Router />\
        <Header />
      </>
    );
  }
}


export default App;
