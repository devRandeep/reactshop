import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Programs from './components/Programs';
import Home from './components/Home';
import {Route, Switch } from 'react-router-dom';
import Config from './components/Config';
import Time from './components/Time';
import Maint from './components/Maint';
import Alarms from './components/Alarms';
import Ioconfig from './components/Ioconfig';
import Api from './components/Api';
import Footer from './components/Footer';
import Users from './components/Users';
import Style from './css/Style.css';

function App() {  
  return (
    <div className="App">
      <header className="App-header">      
       <section className="out-body">
	    <figure className="frame-app">
        {/* Header { Component } */}
      <Header />
      {/* Navbar { Component } */}
      <Menu />
      {/* Pages { Component } */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/programs"component={Programs} />
        <Route exact path="/config"component={Config} />
        <Route exact path="/time" component={Time} />
        <Route exact path="/maint" component={Maint} />
        <Route exact path="/alarms" component={Alarms} />
        <Route exact path="/ioconfig" component={Ioconfig} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/api" component={Api} />
      </Switch>       
      <Footer />
      </figure>
      </section>
      </header>
    </div>
  );
}

export default App;
