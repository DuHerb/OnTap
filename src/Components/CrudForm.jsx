import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { v4 } from 'uuid'

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

const CrudForm = ({editMode, onSetEditMode, onCloseForm, formOpen, onCreateKeg, onSetViewedBeer, keg, onUpdateKeg}) => {
  const classes = useStyles();
  const defaultValues = {
    name: '',
    brewery: 'Deschutes',
    style: '',
    abv: '',
    pintsLeft: 124,
    price: '',
    description: '',
    onTap: false,
    imageKey: 'default',
    uid: v4()
  }

  //form functions
  const [values, setValues] = React.useState(defaultValues);

  React.useEffect(()=> {
    if(editMode === 'edit')
      setValues(keg)
  }, [editMode, keg])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmitCreateForm = () => {
    onCreateKeg(values);
    onSetViewedBeer(values.uid)
    onCloseForm();
    onSetEditMode('');
    setValues(defaultValues);
  }

  const onSubmitUpdateForm = () => {
    onUpdateKeg(values);
    onSetViewedBeer(values.uid);
    onCloseForm();
    onSetEditMode('');
    setValues(defaultValues);
  }

  return (
    <>
      <Dialog fullScreen open={formOpen} onClose={onCloseForm} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{background: 'rgb(17, 13, 1)', color: 'rgb(230, 225, 206)'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onCloseForm} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {editMode === 'create' ? 'Create New Keg' : 'Update Keg'}
            </Typography>
            {editMode === 'create' ?
              <Button color="inherit" variant='outlined' onClick={onSubmitCreateForm}>Submit</Button> :
              <Button color="inherit" onClick={onSubmitUpdateForm}>Update</Button>
            }
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>
            Fill out form and press submit to add a new keg to stock
          </DialogContentText>
          <form>
            <TextField
              id="nameInput"
              label="Beer Name"
              placeholder="Beer Name"
              className={classes.textField}
              margin="normal"
              required
              value={values.name}
              onChange={handleChange('name')}
            /><br/>
            <TextField
              id="breweryInput"
              label="Brewery"
              placeholder='Deschutes'
              helperText="Only change if keg is a guest tap"
              className={classes.textField}
              margin="normal"
              value={values.brewery}
              onChange={handleChange('brewery')}
            /><br/>
            <TextField
              id="styleInput"
              label="Beer Style"
              placeholder="Ale"
              className={classes.textField}
              margin="normal"
              required
              value={values.style}
              onChange={handleChange('style')}
            /><br/>
            <TextField
              id="abvInput"
              label="ABV"
              placeholder="ABV"
              className={classes.textField}
              helperText="Number only - Do not include % symbol"
              margin="normal"
              required
              value={values.abv}
              onChange={handleChange('abv')}
            /><br/>
            <TextField
              id="priceInput"
              label="Price"
              placeholder="Price"
              className={classes.textField}
              helperText="Number only - Do not include $ symbol"
              margin="normal"
              required
              value={values.price}
              onChange={handleChange('price')}
            /><br/>
            <TextField
              id="descInput"
              multiline
              label="Description"
              placeholder="Damn Tasty"
              helperText="Descriptions will show in beer display drop down "
              className={classes.textField}
              margin="normal"
              required
              value={values.description}
              onChange={handleChange('description')}
            /><br/>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CrudForm


