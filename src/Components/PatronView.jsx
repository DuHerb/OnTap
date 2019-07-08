import React from 'react';
import PVCard from './PVCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from  '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  centered: {
    margin: '0 auto',
  },
}));


export default function PatronView({kegs}) {
  const classes = useStyles();

  return (
      <Grid container>
        <Grid item xs={12} sm={8} className={classes.centered}>
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

        </Grid>
      </Grid>
  )
}
