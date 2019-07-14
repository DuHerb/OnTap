import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '50%'
  }
})
const CreateKeg = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create New Keg
        </Typography>
      </CardContent>
      <CardActions>
        <Fab color="grey" aria-label="Add" size='small' className={classes.fab}>
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>


  )
}

export default CreateKeg
