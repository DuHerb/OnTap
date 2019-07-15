import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: '25%',
    textAlign: 'center'
  }
})

const PVCprice = ({price}) => {
  const classes = useStyles();
  const getBG = () => {
    return (price > 5.5) ? {backgroundColor: 'yellow'} : {backgroundColor: "green"}
  }
  return (
    <div className={classes.container} style={getBG()}>
      <p>${price}</p>
    </div>
  )
}

export default PVCprice
