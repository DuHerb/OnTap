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
    return this.state.kegs
  }

  render() {
    console.log(this.getKegsOnTap());
    
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


// const beerList = [
//     {
//       name: 'Twilight',
//       brewery: 'Deschutes',
//       style: 'Pale Ale',
//       abv: '5.5',
//       pintsLeft: '124',
//       price: '6',
//       description: 'Cool, Light Bodied Summer Ale.'
//     },
//     {
//       name: 'Mirror Pond',
//       brewery: 'Deschutes',
//       style: 'Pale Ale',
//       abv: '5',
//       pintsLeft: '124',
//       price: '5',
//       description: 'Classic, Style Defining Pale Ale'
//     },
//     {
//       name: 'Fresh Squeezed',
//       brewery: 'Deschutes',
//       style: 'IPA',
//       abv: '6.8',
//       pintsLeft: '124',
//       price: '6.5',
//       description: 'Citra and Mosiac Hops'
//     }
//   ]
