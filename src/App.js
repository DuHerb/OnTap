import React from 'react';
import './App.css';
import Header from './Components/Header';
import PatronView from './Components/PatronView';
import POSView from './Components/POSView';
import AdminView from './Components/AdminView';
import { Route, HashRouter } from 'react-router-dom';
import { kegs } from './store.js'

export default class App extends React.Component {
  state = {
    kegs
  }

  getKegsOnTap() {
    return this.state.kegs.filter(keg => keg.onTap);
  }

  render() {
    const kegs = this.getKegsOnTap();

    return (
      <>
        <HashRouter>
          <Header/>
          <Route exact path='/' render={()=><PatronView kegs={kegs}/>} />
          <Route path='/pos' render={()=><POSView/>}  />
          <Route path='/admin' render={()=><AdminView/>} />
        </HashRouter>
      </>
    )
  }
}
