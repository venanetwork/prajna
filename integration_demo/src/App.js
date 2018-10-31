import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Prajna} from "@venaprotocal/jsdk";

// Instantiate a new instance of Prajna, passing in the host of the local blockchain.
const prajna = new Prajna("http://localhost:8545");

class App extends Component {

    componentDidMount() {
        console.log(prajna)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}

export default App;
