import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProfileU from './components/Profile';
import Profile from './About';
class App extends React.Component {
 
  render() {
    return (
      <>
        <Router>
          <Header />

          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
              </Route>
            <Route 
              exact path="/profile"
              element={<ProfileU/>}
            >
            </Route>
            <Route 
              exact path="/about"
              element={<Profile/>}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
