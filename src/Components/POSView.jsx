import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import PVCard from './PVCard'

const useStyles = makeStyles(theme => ({
  centered: {
    margin: '0 auto',
  },
}));

export default function POSView({kegs, onSellPint}) {
  const classes = useStyles();

    const [view] = useState('pos');
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
              view={view}
              onSellPint = {onSellPint}
            />
            )}
    </Grid>
  </Grid>
  )
}
