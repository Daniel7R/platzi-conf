import {useState, useEffect} from 'react'

const useGoogleAddress = (address)=> {

    const [map, setMap] = useState({});
    const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`;

    useEffect(()=>{
        fetch(api)
            .then(data => data.json())
            .then(response => setMap(response.results[0].geometry.location))

    },[])

    return map;
}

export {useGoogleAddress};