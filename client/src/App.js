import React from 'react';

import { Navbar } from './components/Navbar/Navbar'
import Terms from './components/Terms/Terms'
import SingleTerm from './components/Terms/SingleTerm';
import AddTerm from './components/Terms/AddTerm';
import EditTerm from './components/Terms/EditTerm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
             <Route exact path="/" component = {Terms} />
             <Route exact path="/terms/add" component = {AddTerm} />
             <Route exact path="/terms/edit" component = {EditTerm} />
             <Route exact path="/terms/:id" component = {SingleTerm} />
            </Switch>
          </div>
        </Router>
    
    </GlobalProvider>
  );
}

export default App;
