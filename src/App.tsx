
import React from 'react';

import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/index';

import Router from './setting/router';
const store = createStore(reducers,{},applyMiddleware(thunk));

const  App = (props:any) => {

  return (
      <Provider store={store}>
        <Router />
      </Provider>
  )}

export default App;
