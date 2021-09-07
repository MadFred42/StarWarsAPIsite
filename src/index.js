import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/errorBoundry';
import SwService from './service/swService';
import StarWarsServiceContext from './components/service-context'

const starWarsService = new SwService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <StarWarsServiceContext.Provider value={starWarsService}>
        <Router>
          <App />
        </Router>
      </StarWarsServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);