import React from 'react'
import CreateKeg from './CreateKeg';
import { makeStyles } from '@material-ui/styles';
import CrudWindow from './CrudWindow';
import CrudForm from './CrudForm';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    backgroundColor: '#979797cc',
    borderRadius: 5
  }
})
const TapEditor = ({viewedBeer, kegs, onDeleteKeg, onSetViewedBeer, onCreateKeg, onUpdateKeg}) => {

  //edit mode
  const [editMode, setEditMode] = React.useState('view')
  const [formOpen, setOpen] = React.useState(false)

  function handleClickOpen() {
  setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const getBeerIndex = (uid) => kegs.findIndex((beer)=> beer.uid === uid)
  const selectedBeer = () => {
    return kegs[getBeerIndex(viewedBeer)]
  }

  const classes = useStyles();
  return (
    <>
      <h2 className={classes.header}>Keg Manager</h2>
      <CreateKeg
        onSetEditMode={setEditMode}
        onClickOpenForm={handleClickOpen}
      />
      <CrudWindow
        keg={selectedBeer()}
        viewedBeer={viewedBeer}
        onDeleteKeg={onDeleteKeg}
        onSetViewedBeer={onSetViewedBeer}
        onSetEditMode={setEditMode}
        onClickOpenForm={handleClickOpen}
      />
      <CrudForm
        keg={selectedBeer()}
        editMode={editMode}
        onSetEditMode={setEditMode}
        onCloseForm={handleClose}
        formOpen={formOpen}
        onCreateKeg={onCreateKeg}
        onSetViewedBeer={onSetViewedBeer}
        onUpdateKeg={onUpdateKeg}
      />
    </>
  )
}

export default TapEditor
