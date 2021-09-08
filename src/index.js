import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/app';
import configureStore from './store';
import ErrorBoundry from './components/errorBoundry';
import SwService from './service/swService'
import StarWarsServiceContext from './components/service-context'

const starWarsService = new SwService();
const {persistor, store} = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundry>
        <StarWarsServiceContext.Provider value={starWarsService}>
          <Router>
            <App />
          </Router>
        </StarWarsServiceContext.Provider>
      </ErrorBoundry>
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);