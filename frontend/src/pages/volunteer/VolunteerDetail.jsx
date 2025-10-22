import React from 'react'
import { useParams } from 'react-router-dom';

const VolunteerDetail = () => {
    const { volunteer_id } = useParams();
    return (
        <div><h1>Donor Id: {volunteer_id}</h1></div>
    )
}

export default VolunteerDetail