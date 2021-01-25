import "./Select.css";
import { Component, createRef } from "react";
import classNames from "classnames";

// Exemple de stopPropagation
// class Select extends Component {
//   constructor({ items = [], selected }) {
//     super();
//     if (!items.length) {
//       throw new Error("props items in mandatory");
//     }
//     if (!selected) {
//       throw new Error("props selected in mandatory");
//     }
//     this.state = {
//       open: false,
//     };
//   }
//   handleClickItem = (it) => {
//     const { onSelectedChange = () => {} } = this.props;

//     onSelectedChange(it);
//     this.setState({
//       open: false,
//     });
//   };
//   handleClickDocument = (event) => {
//     this.setState({
//       open: false,
//     });
//   }
//   handleClickSelected = (event) => {
//     const { open } = this.state;
//     event.stopPropagation(); // empeche de propager l'event à handleClickDocument
//     this.setState({ open: !open });
//   }
//   componentDidMount() {
//     document.addEventListener('click', this.handleClickDocument);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('click', this.handleClickDocument);
//   }
//   render() {
//     const { items, selected } = this.props;
//     const { open } = this.state;

//     const itemsJsx = items.map((it) => (
//       <div
//         className={classNames("Select-item", {
//           active: it === selected,
//         })}
//         key={it}
//         onClick={() => this.handleClickItem(it)}
//       >
//         {it}
//       </div>
//     ));

//     return (
//       <div className="Select">
//         <div
//           className="Select-selected"
//           onClick={this.handleClickSelected}
//         >
//           {selected}
//         </div>
//         {open && <div className="Select-items">{itemsJsx}</div>}
//       </div>
//     );
//   }
// }

class Select extends Component {
  constructor({ items = [], selected }) {
    super();
    if (!items.length) {
      throw new Error("props items in mandatory");
    }
    if (!selected) {
      throw new Error("props selected in mandatory");
    }
    this.state = {
      open: false,
    };
    this.hostRef = createRef();
  }
  handleClickItem = (it) => {
    const { onSelectedChange = () => {} } = this.props;

    onSelectedChange(it);
    this.setState({
      open: false,
    });
  };
  handleClickDocument = (event) => {
    // si le click à eu lieu dans un descendant de <div className="Select">
    // on ne fait rien
    if (this.hostRef.current.contains(event.target)) {
      return;
    }

    this.setState({
      open: false,
    });
  }
  handleClickSelected = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickDocument);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickDocument);
  }
  render() {
    const { items, selected } = this.props;
    const { open } = this.state;

    const itemsJsx = items.map((it) => (
      <div
        className={classNames("Select-item", {
          'Select-item--active': it === selected,
        })}
        key={it}
        onClick={() => this.handleClickItem(it)}
      >
        {it}
      </div>
    ));

    return (
      <div className="Select" ref={this.hostRef}>
        <div
          className="Select-selected"
          onClick={this.handleClickSelected}
        >
          {selected}
        </div>
        {open && <div className="Select-items">{itemsJsx}</div>}
      </div>
    );
  }
}


export default Select;
