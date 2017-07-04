import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/App'
import reducers from './main/reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
registerServiceWorker();
