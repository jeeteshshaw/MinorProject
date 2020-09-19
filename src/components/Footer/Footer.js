import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Category from "./components/Category/Category"
import Navbar from './components/Navbar/Navbar'
import { Grid, makeStyles } from '@material-ui/core'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <footer>
        <Grid container justify="space-around" className={classes.root} spacing={2}>
          <Grid className="footer__box" item xs={4} md={2}>
            <ul className="footer__list">
              <li><h2 id="footer-logo" className="">Humti Dumti</h2></li>
              <li>Enjoy Latest Movies and Web Series.</li>
            </ul>
          </Grid>
          <Grid className="footer__box" item xs={4} md={2}>
            <div className="footer__menu">
              <ul className="footer__list">
                <li>Explore</li>
                <li>Home</li>
                <li>Category</li>
                <li>About</li>
                <li>Support</li>
                <li>Report</li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={4} className="footer__box">
            <div className="footer__social">
              <ul className="footer__list">
                <li>Follow</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </ul>
            </div>
          </Grid>
          <Grid item md={2} xs={4} className="footer__box">
            <div className="footer__social" >
              <ul className="footer__list">
                <li>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </Grid>

        </Grid>
      </footer>
        </div>
    )
}

export default Footer
