import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';


export const loader = ({ params }) => {
    return getVans(params.id)
}


const VanDetail = () => {
    const location = useLocation();
    // console.log(location);
    // const params = useParams();
    // const [van, setVan] = useState(null);     ==> We created this state to store the data from api through useEffect.
    const van = useLoaderData();

    // useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // },[params.id])
    // // console.log(van);
    
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
  return (
    <div className="van-detail-container">
        <Link 
            to={`..${search}`} 
            relative="path"
            className="back-button"
            >
                &larr; <span>Back to {type} vans</span>
        </Link>

            <div className="van-detail">
                <img src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
    </div>
  )
}

export default VanDetail;