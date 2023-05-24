import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
    const { currentVan } = useOutletContext()
  return (
    <section>
        <h4>Name: {currentVan.name}</h4>
        <h4>Category: {currentVan.type}</h4>
        <h4>Decription: {currentVan.description}</h4>
        <h4>Visibility: Public</h4>
    </section>
  )
}

export default HostVanInfo;