import React from 'react';
import AdminCard from './AdminCard';

const TapManagerWindow = ({kegs}) => {
  return (
    <div>
      {kegs.map((keg)=>
        <AdminCard keg={keg}
          key={keg.name}/>
        )}
    </div>
  )
}

export default TapManagerWindow
