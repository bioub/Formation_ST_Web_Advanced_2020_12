import React, { Component } from "react";

//  class ExHelloWorld extends Component {
//    constructor() {
//      super();
//      this.state = {
//        prenom: '',
//      };
//      this.handleInput = this.handleInput.bind(this);
//    }
//    handleInput(event) {
//       this.setState({
//         prenom: event.target.value
//       });
//    }
//    render() {
//      return (
//        <div className="ExHelloWorld">
//          <div>
//            Prénom : <input onInput={this.handleInput} />
//          </div>
//          <p>Bonjour {this.state.prenom}</p>
//        </div>
//      );
//    }
//  }

class ExHelloWorld extends Component {
  state = {
    prenom: "",
  };
  handleInput = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  };
  render() {
    return (
      <div className="ExHelloWorld">
        <div>
          Prénom : <input onChange={this.handleInput} />
        </div>
        <p>Bonjour {this.state.prenom}</p>
      </div>
    );
  }
}

export default ExHelloWorld;
