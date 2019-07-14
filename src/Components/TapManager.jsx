import React from 'react'
import TapManagerWindow from './TapManagerWindow'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  adminPaper: {
    margin: 10
  },
  header: {
    textAlign: 'center',
    padding: 5
  }
})

const TapManager = ({kegsOnTap, kegs, onToggleTapStatus, onHandleRefillKeg, onSetViewedBeer}) => {
  const classes = useStyles();

  return (
    <>
        <h2  className={classes.header}>Beers On Tap</h2>
        <TapManagerWindow kegs={kegsOnTap} tapStatus={'onTap'} onToggleTapStatus={onToggleTapStatus} onHandleRefillKeg={onHandleRefillKeg} onSetViewedBeer={onSetViewedBeer}/>
        <h2 className={classes.header}>Stock</h2>
        <TapManagerWindow kegs={kegs} tapStatus={'notOnTap'} onToggleTapStatus={onToggleTapStatus} onHandleRefillKeg={onHandleRefillKeg} onSetViewedBeer={onSetViewedBeer}/>
    </>
  )
}

export default TapManager
