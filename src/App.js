import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Login from './components/Login/Login';
import Home from './components/home/Home';
import Detals from './components/detailsPage/Details';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/detail/:id">
            <Detals />
          </Route>
        </Switch>
      </BrowserRouter>    
    </div>
  );
}

export default App;
