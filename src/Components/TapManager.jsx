import React from 'react'
import TapManagerWindow from './TapManagerWindow';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  adminPaper: {
    margin: 10
  }
})

const TapManager = ({kegsOnTap, kegs}) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.adminPaper}>
        <h2>Beers On Tap</h2>
        <TapManagerWindow kegs={kegsOnTap} view={'onTap'}/>
      </Paper>
      <Paper className={classes.adminPaper}>
        <h2>Stock</h2>
        <TapManagerWindow kegs={kegs} view={'notOnTap'}/>
      </Paper>
    </>
  )
}

export default TapManager
