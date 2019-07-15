import React from 'react'
import CreateKeg from './CreateKeg';
import { makeStyles } from '@material-ui/styles';
import CrudWindow from './CrudWindow';

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

  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg
        editMode={editMode}
        onSetEditMode={setEditMode}
        formOpen={formOpen}
        onClickOpenForm={handleClickOpen}
        onCloseForm={handleClose}
        onCreateKeg={onCreateKeg}
      />
      <CrudWindow
        kegs={kegs}
        viewedBeer={viewedBeer}
        onDeleteKeg={onDeleteKeg}
        onSetViewedBeer={onSetViewedBeer}
        editMode={editMode}
        onSetEditMode={setEditMode}
        onCreateKeg={onCreateKeg}
      />
    </>
  )
}

export default TapEditor
