import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import styles from './app.module.css';
import logo from '../../images/logo.svg';



function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>

              <Grid item>
                <Typography variant="h6">
                  <Link to="/">Home</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link to="/about">About</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Link to="/dashboard">Dashboard</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Typography variant="h3" component="h2" gutterBottom>
            Setting up project mix-and-match
          </Typography>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </header>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}



export default App;

