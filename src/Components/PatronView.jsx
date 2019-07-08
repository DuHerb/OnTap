import React from 'react';
import PVCard from './PVCard';
import { Paper } from '@material-ui/core';

export default function PatronView({kegs}) {

  return (
    <div>

      <Paper>
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
      </Paper>
    </div>
  )
}
