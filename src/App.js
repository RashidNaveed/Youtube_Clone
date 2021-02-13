import { useState } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  const [isLarge, setIsLarge] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <Router>
        <Header
          isLarge={isLarge}
          setIsLarge={setIsLarge}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Switch>
          <Route exact path="/">
            <HomePage isLarge={isLarge} />
          </Route>
          <Route exact path="/search/:searchText">
            <SearchPage isLarge={isLarge} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
