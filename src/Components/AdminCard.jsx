import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  adminCard: {
    margin: 5,
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const AdminCard = ({keg}) => {
  const classes = useStyles();
  return (
    <Card className={classes.adminCard}>
    <CardContent>
      {keg.name}
    </CardContent>
    <CardActions>
      <Button size="small">Tap</Button>
      <Button size="small">UnTap</Button>
      <Button size='small'>Refill</Button>
      <Button size='small'>Edit</Button>
    </CardActions>
  </Card>
  )
}

export default AdminCard
