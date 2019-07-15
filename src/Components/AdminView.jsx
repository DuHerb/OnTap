import React, { useState} from 'react'
import TapManager from './TapManager';
import TapEditor from './TapEditor';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  paper: {
    width: '100%',
  }
}));

export default function AdminView({kegsOnTap, kegs, onToggleTapStatus, onRefillKeg, onDeleteKeg, onCreateKeg}) {
  const classes = useStyles();
  const [viewedBeer, setViewedBeer] = useState('default')
  const handleSetViewedBeer = (uid) => {
    setViewedBeer(uid)
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={5}>
          <TapManager
            kegsOnTap = {kegsOnTap}
            kegs={kegs}
            onToggleTapStatus={onToggleTapStatus}
            onRefillKeg={onRefillKeg}
            onSetViewedBeer={handleSetViewedBeer}
          />
      </Grid>
      <Grid item xs={12} sm={6}>
          <TapEditor
              kegsOnTap = {kegsOnTap}
              kegs={kegs}
              viewedBeer={viewedBeer}
              onDeleteKeg={onDeleteKeg}
              onSetViewedBeer={handleSetViewedBeer}
              onCreateKeg={onCreateKeg}
            />
      </Grid>
    </Grid>
  )
}

