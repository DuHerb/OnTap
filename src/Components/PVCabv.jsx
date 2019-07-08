import React from 'react'
import PropTypes from 'prop-types';
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
  return (
    <div className={classes.container}>
      <p>ABV: {abv}%</p>
    </div>
  )
}

PVCabv.propTypes = {
  abv: PropTypes.string
}

export default PVCabv
