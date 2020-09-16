import React,{ useRef } from 'react'
import { Grid, makeStyles, TextField, Button } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    marginTop: "-1rem",
    
    minWidth: "80%"
  },
  mobileGrid : {
    Width: "90%",
    margin: " 0 auto"
  }
}))

function Navbar() {
  const search = useRef(null)
  
  const classes = useStyle();
  
  const mobileMenuHandler = e =>{
    if(document.querySelector('nav').style.display === "none"){
      document.querySelector('nav').style.display = "block";
      document.getElementById('mob-logo').style.display = "none";
      
    }else{
      document.querySelector('nav').style.display = "none";
      document.getElementById('mob-logo').style.display = "block";
      
    }
  }

  const searchHandler = () =>{
    console.log(search.current.value)
  }
    return (
      <header>
      <div className="mobile__menu">
        <Grid container className={classes.root} justify="space-between" spacing={2}>
          <Grid item lg={6}>
            <h1 id="mob-logo" className="logo">Humti Dumti</h1>
          </Grid>
          <Grid item lg={6}>
            <Button onClick={mobileMenuHandler} variant="contained" color="secondary"><FontAwesomeIcon icon={faBars} size={"lg"} /></Button>
          </Grid>
        </Grid>
      </div>
      <nav>
        <Grid container className={classes.root} spacing={2}  >
          <Grid className="logo__box" item lg={2} md={2} sm={12}>
            <h1 className="logo">Humti Dumti</h1>
          </Grid>

          <Grid className="nav__box" item lg={7} md={7} sm={12}>
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__option active">Home</li>
                <li className="nav__option">Category
                  {/* <ul className="sub__menu">
                    <li className="sub__item">Action</li>
                    <li className="sub__item">Horror</li>
                    <li className="sub__item">Comedy</li>
                  </ul> */}
                </li>
                <li className="nav__option">Latest Movies</li>
                <li className="nav__option">Sign up</li>
              </ul>
            </div>
          </Grid>

          <Grid item lg={3} className={classes.mobileGrid} md={3} sm={12}>
            <div className="nav__search">
              <div className="search__box">
                <TextField variant="filled"

                  InputLabelProps={{ style: { color: '#ffffff73', width: "80%" },  }}
                  InputProps={{ style: { color: "#eee" }} }
                  fullWidth={true}
                  className={classes.search}
                  inputRef = {search}
                  label="Movie Name..." />
              </div>
              <div className="search__box">
                <Button onClick={searchHandler} variant="contained" color="secondary"><FontAwesomeIcon icon={faSearch} size={"lg"} /></Button>
              </div>
            </div>

          </Grid>
        </Grid>
      </nav>
    </header>
    )
}

export default Navbar
