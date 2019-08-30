import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
<<<<<<< HEAD
import configureStore from './store/index';

const store = configureStore();

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
=======

ReactDOM.render(
  <App />,
   document.getElementById('root')
 );
>>>>>>> 192de3d43dcc7736950f1ed1688336e0006fea7d
