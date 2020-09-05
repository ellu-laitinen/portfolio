import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Projects from './containers/Projects/Projects'
import About from './containers/About/About'
import './App.css';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Contact from './containers/Contact/Contact'

const App = () => {


  return (

    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/download_cv" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
