import { Component } from "react";

// historiquement
// class => stateful component
// function => stateless component

// aujourd'hui
// class => class component
// function => function component

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;