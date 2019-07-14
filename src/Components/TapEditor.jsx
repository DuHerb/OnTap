import React from 'react'
import CreateKeg from './CreateKeg';
import { textAlign } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  }
})
const TapEditor = () => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg/>
    </>
  )
}

export default TapEditor
