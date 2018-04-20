import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk';
import LoginForm from './components/LoginForm'
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <HashRouter history={hashHistory}>
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/testfetch' component={L} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)