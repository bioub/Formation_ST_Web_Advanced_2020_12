import { Component } from "react";

// historiquement
// class => stateful component
// function => stateless component

// aujourd'hui
// class => class component
// function => function component

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      format: '',
      now: new Date(),
    };
  }
  componentDidMount() {
    this._interval = setInterval(() => {
      // console.log('setState (Clock)', new Date());
      this.setState({ // tant que this existe, pas de GC sur Clock possible
        now: new Date(),
      });
    }, this.props.delayMs);
  }
  componentDidUpdate(previousProps) {
    if (previousProps.delayMs !== this.props.delayMs) {
      clearInterval(this._interval);
      this._interval = setInterval(() => {
        // console.log('setState (Clock)', new Date());
        this.setState({ // tant que this existe, pas de GC sur Clock possible
          now: new Date(),
        });
      }, this.props.delayMs);
    }
  }
  componentWillUnmount() {
    // cette ligne est importer pour arrêter l'interval
    // et donc ne plus exécuter le JS associé
    // ET libérer la mémoire
    clearInterval(this._interval);
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
