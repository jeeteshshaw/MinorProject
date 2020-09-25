import React, { } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'
import Homepage from './components/Homepage/Homepage'
import BgPoster from './login_bg.jpg'



function App() {

  // const [spacing, setSpacing] = useState(2);

  return (
    <Router>
      <div>
        <img className="background" src={BgPoster} alt="background" />
      </div>

      <Navbar />
      <main>
        {/* <Login /> */}

        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/user/signup' component={Signup} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
