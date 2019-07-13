import React from 'react';
import AdminCard from './AdminCard';

const TapManagerWindow = ({kegs, tapStatus, onToggleTapStatus, onHandleRefillKeg}) => {
  return (
    <div>
      {kegs.map((keg)=>
        <AdminCard keg={keg}
          tapStatus={tapStatus}
          onToggleTapStatus={onToggleTapStatus}
          onHandleRefillKeg={onHandleRefillKeg}
          key={keg.name}/>
        )}
    </div>
  )
}

export default TapManagerWindow
