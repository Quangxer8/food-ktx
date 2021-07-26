// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

// import {connect} from 'react-redux';
import { Home, ProductDetail, ShopDetail, SignIn, SignUp } from './pages';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/shop/:id'>
            <ShopDetail/>
          </Route>
          <Route exact path='/product/:id'>
            <ProductDetail/>
          </Route>
          <Route path='/signin'>
            <SignIn/>
          </Route>
          <Route path='/signUp'>
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
