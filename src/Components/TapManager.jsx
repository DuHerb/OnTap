import React from 'react'
import TapManagerWindow from './TapManagerWindow'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  adminPaper: {
    margin: 10
  },
  padding: {
    padding: 5
  }
})

const TapManager = ({kegsOnTap, kegs, onToggleTapStatus}) => {
  const classes = useStyles();
  // const onTap = true;
  // const notOnTap = false
  return (
    <>
        <h2 className={classes.padding}>Beers On Tap</h2>
        <TapManagerWindow kegs={kegsOnTap} tapStatus={'onTap'} onToggleTapStatus={onToggleTapStatus}/>
        <h2 className={classes.padding}>Stock</h2>
        <TapManagerWindow kegs={kegs} tapStatus={'notOnTap'} onToggleTapStatus={onToggleTapStatus}/>
    </>
  )
}

export default TapManager
