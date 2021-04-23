import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import NewsPage from './NewsPage';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news/:id" component={NewsPage} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;