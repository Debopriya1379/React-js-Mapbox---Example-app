import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import {MapProvider} from 'react-map-gl';

const mapboxAccessToken = process.env.REACT_APP_Mapbox_Access_Token;

function App() {

  return (
    <Cotainer>
      <MapProvider>
        <Main mapboxAccessToken={mapboxAccessToken}/>
        <Sidebar mapboxAccessToken={mapboxAccessToken}/>
      </MapProvider>
    </Cotainer>
  );

}

export default App;

const Cotainer = styled.div`
  /* background-color: aqua; */
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 9fr 3fr;
`
