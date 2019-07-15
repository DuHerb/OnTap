import React from 'react'
import TapManagerWindow from './TapManagerWindow'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  adminPaper: {
    margin: 10
  },
  header: {
    textAlign: 'center',
  }
})

const TapManager = ({kegsOnTap, kegs, onToggleTapStatus, onRefillKeg, onSetViewedBeer, onSellPint}) => {
  const classes = useStyles();

  return (
    <>
        <h2  className={classes.header}>Beers On Tap</h2>
        <TapManagerWindow
          kegs={kegsOnTap}
          tapStatus={'onTap'}
          onToggleTapStatus={onToggleTapStatus}
          onRefillKeg={onRefillKeg}
          onSetViewedBeer={onSetViewedBeer}
          onSellPint={onSellPint}
        />
        <h2 className={classes.header}>Stock</h2>
        <TapManagerWindow
          kegs={kegs}
          tapStatus={'notOnTap'}
          onToggleTapStatus={onToggleTapStatus}
          onRefillKeg={onRefillKeg}
          onSetViewedBeer={onSetViewedBeer}
        />
    </>
  )
}

export default TapManager
