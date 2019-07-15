import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CrudForm from './CrudForm';

const useStyles = makeStyles({
  root: {
    marginTop: 5,
  },
  cardContent:{
    padding: '5px 10px'
  },
  cardActions: {
    justifyContent: 'right'
  }
})

const CrudWindow = ({kegs, viewedBeer, onDeleteKeg, onCreateKeg, onSetViewedBeer, editMode, onSetEditMode, formOpen, onClickOpenForm, onCloseForm}) => {
  const classes = useStyles();

  const getBeerIndex = (beerName) => kegs.findIndex((beer)=> beer.name === beerName)
  const selectedBeer = (beerName) => {
    return kegs[getBeerIndex(viewedBeer)]
  }

  //delete dialogue control
  const [open, setOpen] = React.useState(false);
  function handleDialogeOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleOnDeleteKeg = (beerName) => {
    let beerToDelete = beerName;
    onSetViewedBeer('default')
    onDeleteKeg(beerToDelete);
    handleClose();
  }

  const handleOpenEditKeg = () => {
    onSetEditMode('edit');
    onClickOpenForm();
  }

  return (
    <Card className={classes.root}>
      {viewedBeer !== 'default' &&
      <>
        <Typography className={classes.cardContent} variant='h4'>Name: {selectedBeer().name}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Brewery: {selectedBeer().brewery}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Description: {selectedBeer().description}</Typography>
        <Typography className={classes.cardContent} variant='h6'>ABV: {selectedBeer().abv}%</Typography>
        <Typography className={classes.cardContent} variant='h6'>Price: ${selectedBeer().price}</Typography>
        <CardActions className={classes.cardActions}>
          <Button variant='outlined' onClick={()=> handleOpenEditKeg()}>Edit</Button>
          <Button variant='contained' onClick={() => handleDialogeOpen()}>Delete</Button>
        </CardActions>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Delete this keg?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting this keg will remove it from stock of <em>ALL</em> locations.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()} color="primary">
            Disagree
          </Button>
          <Button onClick={()=>handleOnDeleteKeg(selectedBeer().name)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
      }
      {/* <CrudForm
        editMode={editMode}
        onSetEditMode={onSetEditMode}
        onCloseForm={onCloseForm}
        formOpen={formOpen}
        onCreateKeg={onCreateKeg}
        onSetViewedBeer={onSetViewedBeer}
      /> */}
    </Card>
  )
}

export default CrudWindow
