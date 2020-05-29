import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from 'components/layouts/Navbar';
import Home from 'components/Home';
import TaskIndex from 'components/TaskIndex';
import Auth from 'containers/auth';
import fb from 'config/fbConfig';

interface AppProps {
  loggedIn: () => void;
  loggedOut: () => void;
}

const App: React.FC<AppProps> = ({ loggedIn, loggedOut }) => {
  useEffect(() => {
    new Promise((res, rej) => {
      fb.auth().onAuthStateChanged(user => {
        user ? res(loggedIn()) : rej(loggedOut());
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Auth>
            <Route path="/tasks" component={TaskIndex} />
          </Auth>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
