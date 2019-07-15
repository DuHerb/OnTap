import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#ffbaba',
    width: '50%',
    textAlign: 'center'
  }

})

const PVCabv = ({abv}) => {
  const classes = useStyles();
  const getBG = () => {
    return abv > 6 ? {backgroundColor: '#ed8a19'} : {backgroundColor: '#3fb3db'}
  }
  return (
    <div className={classes.container} style={getBG()}>
      <p>ABV: {abv}%</p>
    </div>
  )
}

export default PVCabv
