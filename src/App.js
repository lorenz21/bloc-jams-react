import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Bloc Jams</span>

            <div className="mdl-layout-spacer"></div>

            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link to='/' className="mdl-navigation__link">Landing</Link>
              <Link to='/library' className="mdl-navigation__link">Library</Link>
            </nav>
            </div>
          </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Bloc Jams</span>
          <nav className="mdl-navigation">
            <Link to='/' className="mdl-navigation__link">Landing</Link>
            <Link to='/library' className="mdl-navigation__link">Library</Link>
          </nav>
        </div>
      </div>
        <header>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
        </header>
        <main className="mdl-layout__content">
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
