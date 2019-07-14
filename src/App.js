import React from 'react';
import './App.css';
import Header from './Components/Header';
import PatronView from './Components/PatronView';
import POSView from './Components/POSView';
import AdminView from './Components/AdminView';
import { Route, HashRouter } from 'react-router-dom';
import { kegs } from './store.js';
import Button from '@material-ui/core/Button'

export default class App extends React.Component {
  state = {
    kegs,
  }

  //Helper Functions
  getKegsOnTap() {
    return this.state.kegs.filter(keg => keg.onTap);
  }

  getBeerIndex = (beerName) => kegs.findIndex((beer)=> beer.name === beerName)

  //Handler Function
  handleSellPint = (beerName) => {
    let selectedBeerIndex = this.getBeerIndex(beerName);
    let updatedKegs = [...kegs];
    updatedKegs[selectedBeerIndex].pintsLeft = updatedKegs[selectedBeerIndex].pintsLeft - 1;
    this.setState({kegs: updatedKegs});
  }

  handleToggleTapStatus = (beerName) => {
    let selectedBeerIndex = this.getBeerIndex(beerName);
    let updatedKegs = [...kegs];
    updatedKegs[selectedBeerIndex].onTap = !updatedKegs[selectedBeerIndex].onTap;
    this.setState({kegs: updatedKegs});
    console.log(updatedKegs[selectedBeerIndex].onTap);
  }

  handleRefillKeg = (beerName) => {
    let selectedBeerIndex = this.getBeerIndex(beerName);
    let updatedKegs = [...kegs];
    updatedKegs[selectedBeerIndex].pintsLeft = 124;
    this.setState({kegs: updatedKegs});
  }

  render() {
    return (
        <HashRouter>
          <Header/>
            <Route exact path='/' render={()=><PatronView kegs={this.getKegsOnTap()}/>} />
            <Route path='/pos' render={()=><POSView kegs={this.getKegsOnTap()} onSellPint={this.handleSellPint}/>} />
            <Route path='/admin' render={()=><AdminView kegsOnTap={this.getKegsOnTap()} kegs={this.state.kegs} onToggleTapStatus={this.handleToggleTapStatus} onHandleRefillKeg={this.handleRefillKeg}/>} />
        </HashRouter>
    )
  }
}
