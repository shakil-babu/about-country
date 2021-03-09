import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/details/:countryName' component={CountryDetails}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
