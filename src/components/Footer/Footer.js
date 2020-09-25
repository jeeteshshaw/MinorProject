import React from 'react'
import { Link } from "react-router-dom"
import { Grid, makeStyles } from '@material-ui/core'
import "./Footer.css"

// material ui stylesheet
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: "red"
  },
}))

function Footer() {
  const classes = useStyle()

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
                <li><Link exact to='/' className='link'>Home</Link></li>
                <li><Link exact to='/category' className='link'>Category</Link></li>
                <li><Link exact to='/about' className='link'>About</Link></li>
                <li><Link exact to='/support' className='link'>Support</Link></li>
                <li><Link exact to='/report' className='link'>Report</Link></li>
              </ul>
            </div>
          </Grid>

          <Grid item md={2} xs={4} className="footer__box">
            <div className="footer__social">
              <ul className="footer__list">
                <li>Follow</li>
                <li><Link exact to='/insta' className='link'>Instagram</Link></li>
                <li><Link exact to='/twitt' className='link'>Twitter</Link></li>
                <li><Link exact to='/fb' className='link'>Facebook</Link></li>
                <li><Link exact to='/Yt' className='link'>Youtube</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid item md={2} xs={4} className="footer__box">
            <div className="footer__social" >
              <ul className="footer__list">
                <li>Legal</li>
                <li><Link exact to='/terms' className='link'>Terms</Link></li>
                <li><Link exact to='/privacy' className='link'>Privacy</Link></li>
              </ul>
            </div>
          </Grid>

        </Grid>
      </footer>
    </div>
  )
}

export default Footer
