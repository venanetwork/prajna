import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Prajna} from "@venaprotocal/jssdk";

// Instantiate a new instance of Dharma, passing in the host of the local blockchain.
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
