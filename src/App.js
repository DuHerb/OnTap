import React from 'react';
import './App.css';
import Header from './Components/Header';
import PatronView from './Components/PatronView';
import POSView from './Components/POSView';
import AdminView from './Components/AdminView';
import { Route, HashRouter } from 'react-router-dom';
import { kegs } from './store.js'
import { Button } from '@material-ui/core'

export default class App extends React.Component {
  state = {
    kegs,
  }

  getKegsOnTap() {
    return this.state.kegs.filter(keg => keg.onTap);
  }

  getBeerIndex = (beerName) => kegs.findIndex((beer)=> beer.name === beerName)

  handleSellPint = (beerName) => {
    let selectedBeerIndex = this.getBeerIndex(beerName);
    // console.log(selectedBeerIndex);
    // console.log({...this.state.kegs[selectedBeerIndex]});
    // let thisPintsLeft = this.state.kegs[selectedBeerIndex].pintsLeft;
    // console.log(thisPintsLeft);
    let updatedKegList = [...kegs];
    updatedKegList[selectedBeerIndex].pintsLeft = updatedKegList[selectedBeerIndex].pintsLeft - 1;
    this.setState({kegs: updatedKegList});
  }



  render() {

    return (
        <HashRouter>
          <Header/>
          <Button onClick={()=>this.handleSellPint('Twilight')}>Sell Pint</Button>
          <Route exact path='/' render={()=><PatronView kegs={this.getKegsOnTap()}/>} />
          <Route path='/pos' render={()=><POSView kegs={this.getKegsOnTap()} onSellPint={this.handleSellPint} />}  />
          <Route path='/admin' render={()=><AdminView/>} />
        </HashRouter>
    )
  }
}
