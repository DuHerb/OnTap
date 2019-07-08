import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  colorBoxItem2: {
    width: '100%',
    backgroundColor: '#50ac31',
    textAlign: 'center'
  }
})

const PVCpints = ({pintsLeft}) => {
  const classes = useStyles();
  return (
    <div className={classes.colorBoxItem2}>
      <p>pints Left: {pintsLeft}</p>
    </div>
  )
}

PVCpints.propTypes = {
  pintsLeft: PropTypes.number
}

export default PVCpints
