import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  colorBoxItem2: {
    width: '100%',
    textAlign: 'center'
  }
})

const PVCpints = ({pintsLeft}) => {
  const classes = useStyles();

  let getColor = ()=> {
    if(pintsLeft < 115) {
      return '#973737'
    } else if (pintsLeft < 120){
      return '#eeb43d'
    } else {
      return '#74ab63'
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

export default PVCpints
