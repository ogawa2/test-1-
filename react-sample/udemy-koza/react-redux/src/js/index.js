import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './components/app';
// import MainArea from './components/mainArea';

const reducer = (state = {text: "text"}, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
       return  Object.assign({},state,{text: action.text});
    default:
      return state;
  }
}

const logger = createLogger();
const store = createStore(
  reducer,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
  )
);

const onChange = (text) => {
  const action = {
    type: "CHANGE_TEXT",
    text: text
  }
  store.dispatch(action);//reducerにactionを渡すことができる
}


const render = () => {
  const state = store.getState();

  ReactDOM.render(
    // <MainArea 
    //   text={state.text}
    //   onChange={onChange}/>,
    <App/>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);