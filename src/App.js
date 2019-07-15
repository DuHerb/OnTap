import React from 'react';
import './App.css';
import Header from './Components/Header';
import PatronView from './Components/PatronView';
import POSView from './Components/POSView';
import AdminView from './Components/AdminView';
import { Route, HashRouter } from 'react-router-dom';
import { kegs } from './store.js';
// import Button from '@material-ui/core/Button';
export default class App extends React.Component {
  state = {
    kegs,
  }

  //Helper Functions
  getKegsOnTap() {
    return this.state.kegs.filter(keg => keg.onTap);
  }

  getBeerIndex = (uid) => this.state.kegs.findIndex((beer)=> beer.uid === uid)

  //Handler Functions
  handleSellPint = (uid) => {
    // let selectedBeerIndex = this.getBeerIndex(uid);
    let updatedKegs = [...this.state.kegs];
    updatedKegs[this.getBeerIndex(uid)].pintsLeft = updatedKegs[this.getBeerIndex(uid)].pintsLeft - 1;
    this.setState({kegs: updatedKegs});
  }

  handleToggleTapStatus = (uid) => {
    let updatedKegs = [...this.state.kegs];
    updatedKegs[this.getBeerIndex(uid)].onTap = !updatedKegs[this.getBeerIndex(uid)].onTap;
    this.setState({kegs: updatedKegs});
  }

  handleRefillKeg = (uid) => {
    let updatedKegs = [...this.state.kegs];
    updatedKegs[this.getBeerIndex(uid)].pintsLeft = 124;
    this.setState({kegs: updatedKegs});
  }

  //CRUD Actions
  handleDeleteKeg = (uid) => {
    let updatedKegs = [...this.state.kegs];
    updatedKegs.splice(this.getBeerIndex(uid), 1);
    this.setState({kegs: updatedKegs});
  }

  handleCreateKeg = (values) => {
    let updatedKegs = [...this.state.kegs, values];
    this.setState({kegs: updatedKegs});
  }

  handleUpdateKeg = (values ) => {
    let updatedKegs = [...this.state.kegs]
    updatedKegs[this.getBeerIndex(values.uid)] = values;
    this.setState({kegs: updatedKegs})
  }

  render() {
    return (
        <HashRouter>
          <Header/>
          <Route exact path='/' render={()=>
            <PatronView
              kegs={this.getKegsOnTap()}
            />}
          />
          <Route path='/pos' render={()=>
            <POSView
              kegs={this.getKegsOnTap()}
              onSellPint={this.handleSellPint}
            />}
          />
          <Route path='/admin'render={()=>
            <AdminView
              kegsOnTap={this.getKegsOnTap()}
              kegs={this.state.kegs}
              onToggleTapStatus={this.handleToggleTapStatus}
              onRefillKeg={this.handleRefillKeg}
              onDeleteKeg={this.handleDeleteKeg}
              onCreateKeg={this.handleCreateKeg}
              onUpdateKeg={this.handleUpdateKeg}
            />}
          />
          {/* <Button variant='outlined' onClick={()=>this.handleUpdateKeg({brewery: 'test brewery', uid: '1', onTap: true, imageKey: 'twilight'})}>Test update Keg</Button> */}
        </HashRouter>
    )
  }
}
