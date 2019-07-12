import React from 'react'

const TapManager = ({kegsOnTap, kegs}) => {
  console.log(kegsOnTap);
  
  return (
    <div>
      {kegsOnTap.map((keg)=>
        <p>{keg.name}</p>
        )}
    </div>
  )
}

export default TapManager
