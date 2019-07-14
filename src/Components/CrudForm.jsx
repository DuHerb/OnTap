import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CrudForm = ({editMode, onSetEditMode, onCloseForm, formOpen}) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // function handleClickOpen() {
  //   onSetEditMode('create')
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }
  return (
    <>
      {/* <Fab color="inherit" aria-label="Add" size='small' className={classes.fab} onClick={handleClickOpen}>
        <AddIcon />
      </Fab> */}
      <Dialog fullScreen open={formOpen} onClose={onCloseForm} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onCloseForm} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {editMode === 'create' ? 'Create New Keg' : 'Update Keg'}
            </Typography>
            <Button color="inherit" onClick={onCloseForm}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </>
  )
}

export default CrudForm
