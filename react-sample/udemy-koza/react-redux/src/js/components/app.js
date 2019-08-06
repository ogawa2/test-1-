import React from 'react';
import SideArea from './sideArea';
import MainArea from './mainArea';

export default class App extends React.Component {
   render() {
     return (
       <div className="wrap">
         <SideArea />
         <MainArea />
       </div>
     )
   }
 }
 