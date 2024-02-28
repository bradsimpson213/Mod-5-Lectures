import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import userReducer from "./userReducer"


const rootReducer = combineReducers({
    userState: userReducer
})


let enhancer

if (import.meta.env.MODE !== "production") {
    const logger = (await import("redux-logger")).default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;