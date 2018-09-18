import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessageAction, popMessageAction } from './actions/messageAction'
import MaterialButton from './components/MaterialButton';
import MaterialPopover from './components/MaterialPopover';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfButtonClicks: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUdate() {
    console.log("componentWillUpdate");
  }

  addmessage = (e) => {
    let numberOfClicks = this.state.numberOfButtonClicks;
    numberOfClicks = ++numberOfClicks;
    this.setState({ numberOfButtonClicks: numberOfClicks });
    this.props.onAddMessage(e.button); // Dispatched with actionCreator bound to prop
    // this.props.dispatch(simpleAction(e.button)); // Dispatched "manually"
  }

  popMessage = () => {
    this.props.onPopMessage();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload...
        </p>

        <MaterialPopover />

        <MaterialButton label="Alert" onClick={() => alert("This is a test")} /> <br />
        
        <MaterialButton label="Push" onClick={this.addmessage} />
        <MaterialButton label="Pop" onClick={this.popMessage} /> <br />
        
        <button onClick={this.addmessage}>Add ({this.state.numberOfButtonClicks})</button> <br />

        <pre>{this.state.numberOfButtonClicks}</pre>
        <pre>{ JSON.stringify(this.props, null, 10) }</pre>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	message: state.Message,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (message) => {
      dispatch(addMessageAction(message))
    },
    onPopMessage: () => {
      dispatch(popMessageAction())
    }
  }
}

// If no DispatchToProps is passed (eg null) this.props.dispatch will be available,
// otherwise it will be undefined.
export default connect(mapStateToProps, mapDispatchToProps)(App);