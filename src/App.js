import React, { } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Category from "./components/Category/Category"
import Navbar from './components/Navbar/Navbar'
import { Grid, makeStyles } from '@material-ui/core'
import Footer from './components/Footer/Footer'



function App() {

  // const [spacing, setSpacing] = useState(2);

  return (
    <Router>
      <div className="background"></div>
      <Navbar />
      <main></main>
      <Footer />
    </Router>
  );
}

export default App;
