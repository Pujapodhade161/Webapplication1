import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MapContainer  from './Map'

const User = () => {
    const data = useLocation()
    const [coordinates,setCoordinates] = useState([])
    useEffect(() => {
        console.log(data)
        setCoordinates(data.state.location)
    }, [])
    return (
        <div>
            <MapContainer latitude={coordinates[0]} longitude={coordinates[1]}/> 
        </div>
    )
}

export default User
