import React from 'react'
import CreateKeg from './CreateKeg';
import { makeStyles } from '@material-ui/styles';
import CrudWindow from './CrudWindow';

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  }
})
const TapEditor = ({viewedBeer, kegs, onDeleteKeg, onSetViewedBeer}) => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg/>
      <CrudWindow kegs={kegs} viewedBeer={viewedBeer} onDeleteKeg={onDeleteKeg} onSetViewedBeer={onSetViewedBeer}/>
    </>
  )
}

export default TapEditor
