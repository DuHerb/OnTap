import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import logo from '../../src/images/deschuteslogo.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: "none",
    color: 'black'
  },
  logo: {
    width: 150
  }
}));

const inlineHeader = {
  backgroundColor: 'rgb(17, 13, 1)',
  fontFamily: "'Roboto Condensed', sans-serif",
  color: 'rgb(230, 225, 206)'
}

const beige ={
  color: '#e6e1ce'
}

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" color="default" style={inlineHeader}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={beige} aria-label="Menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link className={classes.navLink} to="/">PatronView</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.navLink} to="/pos">POSView</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.navLink} to="/admin">AdminView</Link></MenuItem>
      </Menu>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img className={classes.logo} src={logo} alt='Deschutes Brewery'></img>
        <Typography style={{fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 'bolder'}}>What's On Tap</Typography>
      </div>
          {/* <Typography variant="h6" className={classes.title}>
            On Tap
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}