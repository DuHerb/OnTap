import React from 'react';
import './App.css';
import Header from './Components/Header';
import PatronView from './Components/PatronView';
import POSView from './Components/POSView';
import AdminView from './Components/AdminView';
import { Switch, Route, HashRouter } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Header/>
            <Route exact path='/' render={()=><PatronView/>} />
            <Route path='/pos' render={()=><POSView/>}  />
            <Route path='/admin' render={()=><AdminView/>} />
        </HashRouter>
      </>
    )
  }
}


