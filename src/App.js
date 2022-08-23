import React, { Component } from 'react'
import Form from './Form';
import WelcomeClass from './WelcomeClass';
import DataService from './DataService.js';
import WebComponentService from './WebComponentService';

class App extends Component {
  constructor(props) {
    super(props);
    // DataService Komponente binden
    this.loadData = DataService;
  }

  // Lifecycle Methode, löst bei fertiger Komponentenerstellung aus
  componentDidMount = async () => {

    // loadData holt Daten aus der JSON-Datei
    const getData = await this.loadData();

    // Zuweisen der JSON Werte zu Angular Formular Feld Text
    var aText = document.getElementById("Atext");
    aText.value = getData.text;

    // Zuweisen der JSON Werte zu Angular Formular Feld Nummer
    var aNumber = document.getElementById("Anumber");
    aNumber.value = getData.number;

    // Zuweisen der JSON Werte zu Angular Formular Feld Datum
    var aDate = document.getElementById("Adate");
    aDate.value = getData.date;
  }

  // Funktion löst aus wenn das Formular abgeschickt wird
  handleSubmit() {
    // Aufrufen des Services mit Parameter des Angular Formulars
    const framework = "angular";
    WebComponentService(framework);
  }

  render() {
    return (
      // Komponentenaufbau der Seite
      <div className="App">
        <WelcomeClass></WelcomeClass>
        <Form></Form>
        {/* Einbindung der Web Components */}
        <angular-hello></angular-hello>
        <angular-form onSubmit={this.handleSubmit}></angular-form>
      </div>
    );
  }
}
export default App