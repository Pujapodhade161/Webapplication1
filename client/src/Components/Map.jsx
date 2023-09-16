import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const { latitude, longitude } = props; // Coordinates

  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{
        lat: latitude,
        lng: longitude,
      }}
    >
      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZQdWZWsNyakL30EbvVher j04c9HcqFc8',
})(MapContainer);
