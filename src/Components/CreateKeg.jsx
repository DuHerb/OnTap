import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CrudForm from './CrudForm';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
})
const CreateKeg = ({editMode, onSetEditMode, formOpen, onClickOpenForm, onCloseForm, onCreateKeg, onSetViewedBeer}) => {
  const classes = useStyles();

  const handleCreateNewKeg = ()=> {
    onSetEditMode('create');
    onClickOpenForm();
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create New Keg
        </Typography>
      </CardContent>
      <CardActions>
        <Fab color="inherit" aria-label="Add" size='small' className={classes.fab} onClick={handleCreateNewKeg}>
          <AddIcon />
        </Fab>
          <CrudForm
            editMode={editMode}
            onSetEditMode={onSetEditMode}
            onCloseForm={onCloseForm}
            formOpen={formOpen}
            onCreateKeg={onCreateKeg}
            onSetViewedBeer={onSetViewedBeer}
          />
      </CardActions>
    </Card>


  )
}

export default CreateKeg
