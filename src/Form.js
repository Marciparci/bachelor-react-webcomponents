// import Komponenten + React für Klassenkomponenten
// npm start
import React from 'react';
import DataService from './DataService.js';

// Custom Form Klassen Komponente
class Form extends React.Component {
    constructor(propTypes) {
        super(propTypes);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("hallo aus react-element");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='formDiv'>
                    <label htmlFor="text">Text</label>
                    <input
                        type={"text"}
                        name="text"
                        className='formInput'
                        defaultValue={this.textvalue}
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