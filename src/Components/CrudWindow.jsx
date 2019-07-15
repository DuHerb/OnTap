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

const CrudWindow = ({keg, viewedBeer, onDeleteKeg, onCreateKeg, onSetViewedBeer, editMode, onSetEditMode, formOpen, onClickOpenForm, onCloseForm}) => {
  const classes = useStyles();

  // const getBeerIndex = (uid) => kegs.findIndex((beer)=> beer.uid === uid)
  // const selectedBeer = (uid) => {
  //   return kegs[getBeerIndex(viewedBeer)]
  // }

  //delete dialogue control
  const [open, setOpen] = React.useState(false);
  function handleDialogeOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleOnDeleteKeg = (uid) => {
    let beerToDelete = uid;
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
        <Typography className={classes.cardContent} variant='h4'>Name: {keg.name}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Brewery: {keg.brewery}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Style: {keg.style}</Typography>
        <Typography className={classes.cardContent} variant='h6'>Description: {keg.description}</Typography>
        <Typography className={classes.cardContent} variant='h6'>ABV: {keg.abv}%</Typography>
        <Typography className={classes.cardContent} variant='h6'>Price: ${keg.price}</Typography>
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
          <Button onClick={()=>handleOnDeleteKeg(keg.uid)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
      }
    </Card>
  )
}

export default CrudWindow
