import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Launch from '../launch';
import Sample from '../sample';
import styles from './app.module.css';

function App() {
  return (
    <Router>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>
    
        <Link to="/launch" className="font-medium text-gray-500 hover:text-gray-900">Launch</Link>
        <Link to="/Sample" className="font-medium text-gray-500 hover:text-gray-900">Sample</Link>
      </div>
           
      <div>
        <header className={styles.Header__wrapper}>
          <div className={styles.Header__content}>
            <h1 className={styles.Header__title}>
              Setting up boilerplate
            </h1>
          </div>
        </header>
        <main>
          <div className={styles.Main__wrapper}>
            <div className={styles.Main__wrapper}>
              <div className={styles.Main__wrapper}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/launch">
                    <Launch />
                  </Route>
                  <Route path="/Sample">
                    <Sample />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>

    </Router>


    
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <h2>
      Home
    </h2>
  );
}



export default App;

