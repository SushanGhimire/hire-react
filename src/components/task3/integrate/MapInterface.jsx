import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useState } from "react";
import { useEffect } from "react";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, onMarkerClick, setLngLat, lngLat }) => (
  <div>
    <GoogleMap
      onClick={(ev) => {
        setLngLat({
          latitude: ev.latLng.lat(),
          longitude: ev.latLng.lng(),
        });
      }}
      defaultZoom={3}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {isMarkerShown && (
        <Marker
          position={{ lat: lngLat.latitude, lng: lngLat.longitude }}
          onClick={onMarkerClick}
        />
      )}
    </GoogleMap>
    <div className="flex space-x-10 items-center">
      <h1>longitude: {lngLat.longitude} </h1>
      <h1>latitude:{lngLat.latitude} </h1>
    </div>
  </div>
));

const MapInterface = () => {
  const [isMarkerShown, setisMarkerShown] = useState(false);
  const [lngLat, setLngLat] = useState({
    longitude: "",
    latitude: "",
  });
  const delayedShowMarker = () => {
    setTimeout(() => {
      setisMarkerShown(true);
    }, 3000);
  };

  const handleMarkerClick = () => {
    setisMarkerShown(false);
    delayedShowMarker();
  };

  useEffect(() => {
    delayedShowMarker();
  }, []);

  return (
    <MyMapComponent
      isMarkerShown={isMarkerShown}
      onMarkerClick={handleMarkerClick}
      setLngLat={setLngLat}
      lngLat={lngLat}
    />
  );
};
export default MapInterface;
