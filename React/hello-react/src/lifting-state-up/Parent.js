import { Component } from "react";
import CounterControlled from "./CounterControlled";

class Parent extends Component {
  state = {
    count: 100,
  };
  handleCountChange = (newCount) => {
    this.setState({ count: newCount });
  }
  render() {
    return (
      <div className="Parent">
        <input
          value={this.state.count}
          onChange={(event) =>
            this.setState({ count: Number(event.target.value) })
          }
        />
        <CounterControlled
          count={this.state.count}
          onCountChange={this.handleCountChange}
        />
        <CounterControlled
          count={this.state.count}
          onCountChange={this.handleCountChange}
        />
        <CounterControlled
          count={this.state.count}
          onCountChange={this.handleCountChange}
        />
        <CounterControlled
          count={this.state.count}
          onCountChange={this.handleCountChange}
        />
      </div>
    );
  }
}

export default Parent;
