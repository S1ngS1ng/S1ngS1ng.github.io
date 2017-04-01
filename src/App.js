import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Music from './Music/music';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar open={this.state.navOpen} />
                <div className="App-header">
                    <Router basename="/">
                        <div>
                            {/*<Link to="/">Home</Link>*/}
                            {/*<Link to="/music">Music</Link>*/}
                            <Route exact path="/" />
                            <Route path="/music" component={Music}/>
                        </div>
                    </Router>
                    {/*Footer*/}
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
