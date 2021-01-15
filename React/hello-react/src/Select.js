import { Component } from "react";

class Select extends Component {
  constructor({ items = [], selected }) {
    super();
    if (!items.length) {
      throw new Error("props items in mandatory");
    }
    if (!selected) {
      throw new Error("props selected in mandatory");
    }
  }
  render() {
    const { items, selected } = this.props;
    return (
      <div className="Select">
        <div className="Select-selectedValue">{selected}</div>
        <div className="Select-items">
          {items.map((it) => (
            <div className="Select-item" key={it}>
              {it}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Select;
