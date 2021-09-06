import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/app';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import ErrorBoundry from './Components/errorBoundry';
import SwService from './Service/swService';
import StarWarsServiceContext from './Components/service-context'

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