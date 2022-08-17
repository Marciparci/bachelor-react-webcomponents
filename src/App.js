import React, { Component } from 'react'
import Form from './Form';
import WelcomeClass from './WelcomeClass';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      variable2: 3
    };
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <WelcomeClass></WelcomeClass>
        <Form></Form>
        <angular-hello></angular-hello>
        <angular-form></angular-form>
      </div>
    );
  }
}
export default App
