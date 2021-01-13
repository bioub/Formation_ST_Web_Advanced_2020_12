import { Component } from "react";
import Clock from "./Clock";

class HideableClock extends Component {
  state = {
    show: true,
    delayS: 1,
  };
  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };
  handleChange = (event) => {
    this.setState({
      delayS: Number(event.target.value),
    });
  }
  render() {
    const { show, delayS } = this.state;
    return (
      <div className="HideableClock">
        <button onClick={this.handleClick}>{show ? "Off" : "On"}</button>
        Délai de raffraichissement (en s) <input type="number" value={delayS} onChange={this.handleChange} />
        {show && <Clock delayMs={delayS * 1000} />}
      </div>
    );
  }
}

export default HideableClock;
