import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
// import Api from '../middleware/Api'
import rootReducer from '../reducers'
import { apiMiddleware } from 'redux-api-middleware';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,apiMiddleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod')
// } else {
//   module.exports = require('./configureStore.dev')
// }

