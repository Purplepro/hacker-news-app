import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ResultsPage from './Components/ResultsPage';
import SearchHistoryPage from './Components/SearchHistoryPage';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SearchPage}/>
            <Route path='/results' component={ResultsPage}/>
            <Route path='/history' component={SearchHistoryPage}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
