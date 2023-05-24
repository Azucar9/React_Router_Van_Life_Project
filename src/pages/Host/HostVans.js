import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from '../../api';
// import { requireAuth } from '../../utils';

export const loader = async () => {
  // await requireAuth()
  return getHostVans()
}

const HostVans = () => {
  const vans = useLoaderData();
    // const [vans, setVans] = useState([]);
    // useEffect(() => {
    //     fetch(`/api/host/vans`)
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // },[])
    // console.log(vans);

    const hostVanElements = vans.map((van) => {
        return (
            <Link 
              to={van.id}
              key={van.id}
              className="host-van-link-wrapper"
              >
                <div className="host-van-single" key={van.id}>
                  <img src={van.imageUrl} alt={van.name} />
                  <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                  </div>
                </div>
              </Link>
        )
    })
    // Up in the <Link> component, the path(to="") has to be {`${vans.id}`} if the id in the server.js file were to be number and not string. In this case it was just a string so we hard-coded it directly.
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
          <section>
            {hostVanElements}
          </section>
      </div>
    </section>
  )
}

export default HostVans;