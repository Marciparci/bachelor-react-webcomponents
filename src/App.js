import React, { Component } from 'react'
import Form from './Form';
import WelcomeClass from './WelcomeClass';
import DataService from './DataService.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.loadData = DataService;
  }

  componentDidMount = async () => {

    const getData = await this.loadData();

    // Zuweisen der JSON Werte zu Formular Feldern der Web Component
    var aText = document.getElementById("Atext");
    aText.value = getData.text;

    var aNumber = document.getElementById("Anumber");
    aNumber.value = getData.number;

    var aDate = document.getElementById("Adate");
    aDate.value = getData.date;
  }

  handleSubmit() {
    console.log("Test");
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