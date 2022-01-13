import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {

    const mapStyles = {
        height: "50vh",
        with: "100%"
    };

    const defaultCenter = {
        lat: parseFloat(data.lat), 
        lng: parseFloat(data.lng)
    }

    const apiKey = String(process.env.GOOGLE_API_KEY);

    return (
        <LoadScript googleMapsApiKey= {apiKey}>
            <GoogleMap
                mapContainerStyle= {mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export {Map}
