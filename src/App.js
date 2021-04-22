import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Login from './components/Login/Login';
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
        </Switch>
      </BrowserRouter>    
    </div>
  );
}

export default App;
