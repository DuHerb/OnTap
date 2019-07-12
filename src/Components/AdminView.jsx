import React from 'react'
import TapManager from './TapManager';
import TapEditor from './TapEditor';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '10px'
  },
  paper: {
    width: '100%',
  }
}));

export default function AdminView({kegsOnTap, kegs}) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TapManager kegsOnTap = {kegsOnTap} kegs={kegs}/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TapEditor kegsOnTap = {kegsOnTap} kegs={kegs}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

