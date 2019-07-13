import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  adminCard: {
    margin: '5px 0',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const AdminCard = ({keg, tapStatus, onToggleTapStatus, onHandleRefillKeg}) => {
  const classes = useStyles();

  let getColor = ()=> {
    if(keg.pintsLeft < 115) {
      return 'red'
    } else if (keg.pintsLeft < 120){
      return 'yellow'
    } else {
      return 'green'
    }
  }

  const BG = {
    backgroundImage: `linear-gradient(to right, ${getColor()} ${keg.pintsLeft/1.24}%, white ${(keg.pintsLeft/1.24)-100}%)`,
  }

  return (
    <Card className={classes.adminCard} style={keg.onTap && tapStatus === 'notOnTap' ? {display: 'none'} : {display:'flex'}}>
    <CardContent>
      {keg.name}
      {console.log(tapStatus)}
    </CardContent>
    <CardActions>
      { keg.onTap && tapStatus === 'onTap' ? <Button variant='contained' size="small" onClick={()=>{onToggleTapStatus(keg.name)}}>UnTap</Button> : <Button variant='contained' size="small" onClick={()=>{onToggleTapStatus(keg.name)}}>Tap</Button>}

      {keg.pintsLeft > 120 ? <Button disabled variant='outlined' size='small' style={BG}>{keg.pintsLeft}</Button> : <Button variant='outlined' size='small' style={BG} onClick={()=> onHandleRefillKeg(keg.name)}>Refill</Button>}

      <Button variant='outlined' size='small'>Edit</Button>
    </CardActions>
  </Card>
  )
}

export default AdminCard
