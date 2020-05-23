import React from 'react';
import './Styles/App.css';
import TravelProvider from './ContextAPI/TravelContext';
import {HashRouter , Route , Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
function App() {
  return (
    <HashRouter>
      <>
        <TravelProvider>
          <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </TravelProvider>
      </>
    </HashRouter>
  );
}

export default App;
