import React, { useState, useEffect } from 'react';
import PropertyCard from "./PropertyCard";
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/properties')
      .then(res => {
        console.log('Fetched properties:', res.data);
        // If your backend returns an array directly, use res.data
        setProperties(res.data.default || res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = Array.isArray(properties)
    ? properties.slice(indexOfFirst, indexOfLast)
    : [];

  const totalPages = Array.isArray(properties)
    ? Math.ceil(properties.length / propertiesPerPage)
    : 0;

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading properties...</p>;
  if (!properties.length) return <p>No properties available.</p>;

  return (
    <>
      <div className="row gy-4">
        {currentProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.image} // adjust field name if different
            price={property.price}
            title={property.title}
          />
        ))}
      </div>

      <div className="pagination my-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn mx-1 ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PropertyList;
