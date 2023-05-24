import React, { useEffect, useState } from 'react';
import '../../server';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';

export const loader = () => {
    return getVans();
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    // console.log(typeFilter);
    // const [vans, setVans] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const vans = useLoaderData();
    console.log(vans);
    
    // useEffect(() => {
    //     async function loadVans() {
    //         setIsLoading(true);
    //         try {
    //             const data = await getVans();
    //             setVans(data);
    //         } catch (err) {
    //             // console.log(err);
    //             setError(err);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     loadVans();
    // },[])
    // console.log(vans);

const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map((van) => {
        return(
            <div key={van.id} className="van-tile">                                           
                <Link 
                    to={van.id} 
                    state={{ 
                        search: `?${searchParams.toString()}`, 
                        type: typeFilter}}>                                        
                    <img src={van.imageUrl} alt={van.name}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })
                                                                            // Up in the <Link> component, the path(to="") has to be {`${vans.id}`} if the id in the server.js file were to be number and not string. In this case it was just a string so we hard-coded it directly.
    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
  return (
    <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={()=> handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                    Simple
                </button>
                <button 
                    onClick={()=> handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                    Rugged
                </button>
                <button 
                    onClick={()=> handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >
                    Luxury
                </button>
                {typeFilter ? (
                <button 
                    onClick={()=> handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >
                    Clear filter
                </button>) : null}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
  )
}

export default Vans;