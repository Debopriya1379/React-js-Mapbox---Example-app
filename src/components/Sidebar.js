import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useMap} from 'react-map-gl';

export default function Sidebar({mapboxAccessToken}) {

    const[searchText,setSearchtext] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const {myMap} = useMap();

    const goTo = async()=>{
        myMap.flyTo({center: [lng,lat]});
    }

    const handleSearch = async()=>{
        const response =await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/ "+searchText+" .json?access_token="+mapboxAccessToken);
        console.log(searchText,response.data.features[0].geometry.coordinates);
        let Lng = response.data.features[0].geometry.coordinates[0];
        let Lat = response.data.features[0].geometry.coordinates[1];
        localStorage.setItem("lng",lng);
        localStorage.setItem("lat",lat);
        setLat(Lat);
        setLng(Lng);
        // goTo();
    }

    useEffect(()=>{
        goTo();
    },[lat,lng]);

    return (
        <Container>
            <div className="search">
                <input type="text" placeholder='search locations' value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}} />
            </div>
            <div className="options">
                <button onClick={handleSearch}>Search</button>
                <button>Save Shape</button>
                <button>Fetch Shape</button>
            </div>
            <div className="output">

            </div>
        </Container>  
    )
}

const Container = styled.div`
    background-color: #3D3D3D;
    display: grid;
    grid-template-rows: 1fr 1fr 10fr;
    padding: 0.7rem;
    .search{
        /* background-color: aqua; */
        width: 100%;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
        input{
            width: 100%;
            height: 33px;
            border: 0.2px solid #a4a4a461;
            border-radius: 7px;
            text-align: center;
            background-color: #424242;
            color: #ffffffac;
            &:focus{
                outline: none;
            }
        }
    }
    .options{
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            width: 115px;
            height: 35px;
            border: none;
            border-radius: 5px;
            background-color: #01B9FF;
            color: #ffffffcf;
            cursor: pointer;
        }
    }
    .output{
        background-color: black;
        width: 100%;
        height: 100%;
    }
    
`