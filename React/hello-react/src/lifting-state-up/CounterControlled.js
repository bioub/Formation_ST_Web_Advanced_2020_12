import { Component } from "react";

class CounterControlled extends Component {
  handleClick = () => {
    const { count, onCountChange } = this.props;
    onCountChange(count + 1);
  }
  render() {
    const { count } = this.props;
    return (
      <button className="CounterControlled" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}


export default CounterControlled;
