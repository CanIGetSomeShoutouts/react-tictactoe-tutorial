import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Food from './Food';
import Choice from './Choice';
import Lost from './Lost';

export default class App extends PureComponent {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/food" component={Food}></Route>
                        <Route exact path="/choice" component={Choice}></Route>
                        <Route path="/lost" component={Lost}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}