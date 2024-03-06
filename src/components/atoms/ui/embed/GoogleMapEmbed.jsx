import propTypes from 'prop-types'
export const GoogleMapEmbed = ({ width = '600px', height = '450px' }) => {
  return (
    <iframe
      width={width}
      height={height}
      style={{ border: '0' }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?q=Fundacite+Aragua,+Maracay,+Aragua,+Venezuela&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    ></iframe>
  )
}
GoogleMapEmbed.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
}
