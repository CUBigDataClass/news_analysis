import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import News from './NewsPage';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;