import React from 'react'
import CreateKeg from './CreateKeg';
import { makeStyles } from '@material-ui/styles';
import CrudWindow from './CrudWindow';

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  }
})
const TapEditor = ({viewedBeer}) => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg/>
      <CrudWindow/>
    </>
  )
}

export default TapEditor
