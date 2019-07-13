import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
  colorBoxItem2: {
    width: '100%',
    // backgroundColor: '#50ac31',
    textAlign: 'center'
  }
})

const PVCpints = ({pintsLeft}) => {
  const classes = useStyles();

  let getColor = ()=> {
    if(pintsLeft < 115) {
      return 'red'
    } else if (pintsLeft < 120){
      return 'yellow'
    } else {
      return 'green'
    }
  }

  const BG = {
    height: '100%',
    backgroundImage: `linear-gradient(to right, ${getColor()} ${pintsLeft/1.24}%, white ${(pintsLeft/1.24)-100}%)`,
  }

  const p = {
    margin: 0,
    padding: 16,
  }
  return (
    <div className={classes.colorBoxItem2} >
      <div style={BG}>
        <p style={p}>pints Left: {pintsLeft}</p>

      </div>
    </div>
  )
}

PVCpints.propTypes = {
  pintsLeft: PropTypes.number
}

export default PVCpints
