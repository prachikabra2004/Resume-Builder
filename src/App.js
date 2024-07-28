import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import TemplateSelection from './pages/TemplateSelection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/templates" component={TemplateSelection} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import TemplateSelection from './pages/TemplateSelection';
import SectionsManagement from './pages/SectionsManagement';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/templates" component={TemplateSelection} />
        <Route exact path="/sections" component={SectionsManagement} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import TemplateSelection from './pages/TemplateSelection';
import SectionsManagement from './pages/SectionsManagement';
import Export from './pages/Export';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/templates" component={TemplateSelection} />
        <Route exact path="/sections" component={SectionsManagement} />
        <Route exact path="/export" component={Export} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import TemplateSelection from './pages/TemplateSelection';
import SectionsManagement from './pages/SectionsManagement';
import Export from './pages/Export';
import ProfileManagement from './pages/ProfileManagement';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/templates" component={TemplateSelection} />
        <Route exact path="/sections" component={SectionsManagement} />
        <Route exact path="/export" component={Export} />
        <Route exact path="/profile-management" component={ProfileManagement} />
      </Switch>
    </Router>
  );
};

export default App;
