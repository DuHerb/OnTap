import React from 'react'
import TapManager from './TapManager';
import TapEditor from './TapEditor';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '100%',
  }
}));

export default function AdminView({kegsOnTap, kegs, onToggleTapStatus}) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <TapManager kegsOnTap = {kegsOnTap} kegs={kegs} onToggleTapStatus={onToggleTapStatus}/>
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

