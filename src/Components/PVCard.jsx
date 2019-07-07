import React from 'react'
import PropTypes from 'prop-types'

function PVCard(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

PVCard.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  pintsLeft: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.string,
}

export default PVCard

