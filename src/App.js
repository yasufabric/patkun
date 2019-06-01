import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      appHeaderRed() {
        return <h1>woooo</h1>;
        document.getElementsByClassName("App-header");
        // .ClassName("App-headerRed");
      }
    };
  }

  ask = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("count", this.state.count);
  };

  render() {
    return (
      <div className="App">
        <header
          className={this.state.count === 4 ? "App-headerRed" : "App-header"}
        >
          <h1>hello pat kun</h1>
          <button className="HungryButton" onClick={() => this.ask()}>
            {this.state.count === 5 ? "continue?" : "Are you hungry?"}
          </button>
          {this.state.count === 1 && <h1>wan wan</h1>}
          {this.state.count === 2 && <h1>wan wan wan</h1>}
          {this.state.count === 3 && <h1>...</h1>}
          {this.state.count === 4 && this.state.appHeaderRed()}
          {this.state.count === 5 && <h1>ZZZZ....</h1>}
        </header>
      </div>
    );
  }
}

export default App;
