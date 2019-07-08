import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: '25%',
    textAlign: 'center'
  }
})

const PVCprice = ({price}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>${price}</p>
    </div>
  )
}

PVCprice.propTypes = {
  price: PropTypes.string
}

export default PVCprice
