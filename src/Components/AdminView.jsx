import React, { useState} from 'react'
import TapManager from './TapManager';
import TapEditor from './TapEditor';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around'
  },
  paper: {
    width: '100%',
  }
}));

export default function AdminView({kegsOnTap, kegs, onToggleTapStatus, onHandleRefillKeg}) {
  const classes = useStyles();
  const [viewedBeer, setViewedBeer] = useState('default')
  const handleSetViewedBeer = (beerName) => {
    setViewedBeer(beerName)
  }
  console.log(viewedBeer);

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TapManager kegsOnTap = {kegsOnTap} kegs={kegs} onToggleTapStatus={onToggleTapStatus} onHandleRefillKeg={onHandleRefillKeg} onSetViewedBeer={handleSetViewedBeer}/>
        </Paper>
        <Button variant='contained' onClick={()=> setViewedBeer('twilight')}>Test Set View</Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TapEditor kegsOnTap = {kegsOnTap} kegs={kegs} viewedBeer={viewedBeer}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

