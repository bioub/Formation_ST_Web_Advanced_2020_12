import { Component } from "react";

// binder dans le constructeur
// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

// fonction fléchée dans le render (mais la fonction créée à chaque render)
// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick() {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <button className="Counter" onClick={() => this.handleClick()}>
//         {count}
//       </button>
//     );
//   }
// }

// ESNext class properties (peut etre jamais normée)
class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}


export default Counter;
