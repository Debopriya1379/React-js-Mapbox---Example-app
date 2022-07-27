import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map,{GeolocateControl,Marker} from 'react-map-gl';


export default function Main({mapboxAccessToken}) {

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  useEffect(()=>{
    setLat(localStorage.getItem("lat"));
    setLng(localStorage.getItem("lng"));
  },[])

  return (
    <Container>
        <Map
          id="myMap"
          initialViewState={{
            longitude: 89.450996,
            latitude: 26.323870,
            zoom:13
          }}
          mapboxAccessToken={mapboxAccessToken}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <GeolocateControl/>
          <Marker longitude={lng} latitude={lat} />
        </Map>
    </Container>    
  )
}

const Container = styled.div`
    background-color: blue;
    position: relative;
    width: 100%;
    height: 100%;
`
