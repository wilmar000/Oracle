import React from "react";
import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import oracle from "./oracle";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    oracleOwner: ""
  };

  async componentDidMount() {
    const oracleOwner = await oracle.methods.oracleOwner().call(); //later i will delete from:

    this.setState({ oracleOwner: oracleOwner });
  }

  render() {
    return (
      <div>
        <h2>Oracle Contract</h2>
        <p>This contract is managed by {this.state.oracleOwner}</p>
      </div>
    );
  }
}
export default App;
