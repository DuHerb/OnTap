import React from 'react';
import PVCard from './PVCard';
import { makeStyles } from  '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
  },
}));


export default function PatronView({kegs}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
      {kegs.map((keg) =>
        <PVCard name={keg.name}
          brewery={keg.brewery}
          style={keg.style}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          price={keg.price}
          description={keg.description}
          key={keg.name}
        />
        )}
      </div>
    </>
  )
}
