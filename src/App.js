import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900">
      <BrowserRouter>
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
