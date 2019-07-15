import React from 'react';
import AdminCard from './AdminCard';

const TapManagerWindow = ({kegs, tapStatus, onToggleTapStatus, onRefillKeg, onSetViewedBeer, onSellPint}) => {
  return (
    <div>
      {kegs.map((keg)=>
        <AdminCard keg={keg}
          tapStatus={tapStatus}
          onToggleTapStatus={onToggleTapStatus}
          onRefillKeg={onRefillKeg}
          onSetViewedBeer={onSetViewedBeer}
          key={keg.uid}
          onSellPint={onSellPint}
        />
        )}
    </div>
  )
}

export default TapManagerWindow
