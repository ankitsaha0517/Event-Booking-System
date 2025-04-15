import React from 'react';

const MapIframe = () => {
  const latitude = 22.58202587948511;
  const longitude = 88.46001967507806;
  const zoom = 16;

  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div style={{ width: '100%', height: '450px' }} className='rounded-4xl overflow-hidden shadow-lg'>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapIframe;
