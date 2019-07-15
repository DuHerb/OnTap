import React from 'react';
import PVCard from './PVCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from  '@material-ui/styles'
// import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  centered: {
    margin: '0 auto',
  },
}));


export default function PatronView({kegs}) {
  const classes = useStyles();
  const bgImages = require.context('../../public/Assets', true);

  // eslint-disable-next-line no-unused-vars
  // const [view, setView] = useState('patron');
  const view = 'patron'
  return (
      <Grid container>
        <Grid item xs={12} sm={8} className={classes.centered}>
          {kegs.map((keg) => {
            let imgsrc = bgImages(`./${keg.imageKey}.png`);
            let bgStyle = {
              backgroundImage: `url(${imgsrc})`,
              backgroundPosition: '125px center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: 110,
              backgroundColor: 'rgb(230, 225, 206)'
            }

            return <PVCard name={keg.name}
              brewery={keg.brewery}
              style={keg.style}
              abv={keg.abv}
              pintsLeft={keg.pintsLeft}
              price={keg.price}
              description={keg.description}
              key={keg.uid}
              view={view}
              bg = {bgStyle}
            />
          })
        }
        </Grid>
      </Grid>
  )
}
