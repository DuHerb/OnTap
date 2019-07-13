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

const AdminCard = ({keg, tapStatus, onToggleTapStatus}) => {
  const classes = useStyles();

  return (
    <Card className={classes.adminCard} style={keg.onTap && tapStatus === 'notOnTap' ? {display: 'none'} : {display:'flex'}}>
    <CardContent>
      {keg.name}
      {console.log(tapStatus)}
    </CardContent>
    <CardActions>
      { keg.onTap && tapStatus === 'onTap' ? <Button size="small" onClick={()=>{onToggleTapStatus(keg.name)}}>UnTap</Button> : <Button size="small" onClick={()=>{onToggleTapStatus(keg.name)}}>Tap</Button>}
      {/* <Button size="small">UnTap</Button> */}
      <Button size='small'>Refill</Button>
      <Button size='small'>Edit</Button>
    </CardActions>
  </Card>
  )
}

export default AdminCard
