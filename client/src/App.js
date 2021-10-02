import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/secondpage'>
          <SecondPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
