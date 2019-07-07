import React from 'react';
import PVCard from './PVCard';

export default function PatronView({kegs}) {

  return (
    <div>
      {kegs.map((keg) =>
        <PVCard name={keg.name}
          brewery={keg.brewery}
          style={keg.style}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          price={keg.price}
          description={keg.style}
          key={keg.name}
        />
        )}
    </div>
  )
}
