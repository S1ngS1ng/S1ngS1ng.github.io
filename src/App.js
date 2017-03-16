import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navOpen: true};
    }
    render() {
        return (
            <div className="App">
                <Navbar
                    open={this.state.navOpen}/>
                <AppBar
                    title="S1ngS1ng">
                </AppBar>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
