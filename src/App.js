import React, { Component } from 'react'; 
import Navbar from './Components/navbar.js' ;
import Banner from './Components/Banner.js' ;
import Cards from './Components/Cards.js' ;
import Search from './Components/Search.js';
import Logos from './Components/Logos.js' ;
import Footer from './Components/Footer.js' ;

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logos />
        <Footer />
      </div>
    )
  }
}
