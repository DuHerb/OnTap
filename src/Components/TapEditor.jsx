import React from 'react'
import CreateKeg from './CreateKeg';
import { makeStyles } from '@material-ui/styles';
import CrudWindow from './CrudWindow';
import CrudForm from './CrudForm';

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  }
})
const TapEditor = ({viewedBeer, kegs, onDeleteKeg, onSetViewedBeer, onCreateKeg}) => {

  //edit mode
  const [editMode, setEditMode] = React.useState('view')
  const [formOpen, setOpen] = React.useState(false)

  function handleClickOpen() {
  setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const getBeerIndex = (beerName) => kegs.findIndex((beer)=> beer.name === beerName)
  const selectedBeer = (beerName) => {
    return kegs[getBeerIndex(viewedBeer)]
  }


  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg
        // editMode={editMode}
        onSetEditMode={setEditMode}
        // formOpen={formOpen}
        onClickOpenForm={handleClickOpen}
        // onCloseForm={handleClose}
        // onCreateKeg={onCreateKeg}
        // onSetViewedBeer={onSetViewedBeer}
      />
      <CrudWindow
        kegs={kegs}
        viewedBeer={viewedBeer}
        onDeleteKeg={onDeleteKeg}
        onSetViewedBeer={onSetViewedBeer}
        // editMode={editMode}
        onSetEditMode={setEditMode}
        // onCreateKeg={onCreateKeg}
        // formOpen={formOpen}
        onClickOpenForm={handleClickOpen}
      />
      <CrudForm
        keg={selectedBeer()}
        // viewedBeer={viewedBeer}
        editMode={editMode}
        onSetEditMode={setEditMode}
        onCloseForm={handleClose}
        formOpen={formOpen}
        onCreateKeg={onCreateKeg}
        onSetViewedBeer={onSetViewedBeer}
      />
    </>
  )
}

export default TapEditor
