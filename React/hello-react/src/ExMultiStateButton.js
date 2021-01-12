import React, { Component } from "react";

// class ExMultiStateButton extends Component {
//   constructor() {
//     super();
//     this.state = {
//       index: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       index: (this.state.index + 1) % this.props.values.length
//     })
//   }
//   render() {
//     return (
//       <button className="ExMultiStateButton" onClick={this.handleClick}>
//         {this.props.values[this.state.index]}
//       </button>
//     );
//   }
// }

class ExMultiStateButton extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { index } = this.state;
    const { values } = this.props;
    this.setState({
      index: (index + 1) % values.length,
    });
  }
  render() {
    const { index } = this.state;
    const { values } = this.props;
    return (
      <button className="ExMultiStateButton" onClick={this.handleClick}>
        {values[index]}
      </button>
    );
  }
}

export default ExMultiStateButton;
