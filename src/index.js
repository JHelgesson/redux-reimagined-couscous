import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/:filter?" component={App} />
                    <Route exact path="/someother" render={() => (<div>Match</div>)} />
                    <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root')
);

registerServiceWorker();
