// import Komponenten + React für Klassenkomponenten
// npm start zum Starten der Anwendung
import React from 'react';
import WebComponentService from './WebComponentService';

// Custom Form Klassen Komponente
class Form extends React.Component {
    constructor(propTypes) {
        super(propTypes);

        // Anfangswerte des React Formulars definieren
        this.state = {
            text: "Formular React",
            number: 56,
            date: '2022-08-22'
        };
    }

    // Funktion löst aus wenn das Formular abgeschickt wird
    handleSubmit(event) {
        // verhindert Neuladen der Seite
        event.preventDefault();
        // Aufrufen des Services mit Parameter des React Formulars
        const framework = "react"
        WebComponentService(framework);
    }

    render() {
        return (
            // HTML Aufbau des React Formulars
            <form onSubmit={this.handleSubmit}>
                <div className='formDiv'>
                    <label htmlFor="text">Text</label>
                    <input
                        type={"text"}
                        name="text"
                        className='formInput'
                        defaultValue={this.state.text}
                        id="text"
                    >
                    </input>
                </div>
                <div className='formDiv'>
                    <label htmlFor="number">Nummer</label>
                    <input
                        type={"number"}
                        name="number"
                        className='formInput'
                        id='number'
                        defaultValue={this.state.number}
                    >
                    </input>
                </div>
                <div className='formDiv'>
                    <label htmlFor="date">Datum</label>
                    <input
                        type={"date"}
                        name="date"
                        className='formInput'
                        id='date'
                        defaultValue={this.state.date}
                    >
                    </input>
                </div>
                <div className='formDiv'>
                    <button className='submitButton'>Absenden</button>
                </div>
            </form>
        )
    }
}

// export default um Komponente anderswo zu nutzen
export default Form