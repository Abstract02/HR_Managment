import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Admin from './components/Admin';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {


  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path = '/' element = {
            <Login />
          } />
          <Route path = '/admin' element = {<div>
            <Admin />
            </div>} />
        <Route path = '/profile' element = {<div>
            
            <Profile />
            </div>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
