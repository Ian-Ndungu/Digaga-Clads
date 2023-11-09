import React, { useState, useEffect } from 'react';

function Filter() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const apiUrl = 'https://digaga-clads-main.onrender.com/men';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {<select>
  <option value="All">All Categories</option>
  <option value="Official">Official</option>
  <option value="Smart Casual">Smart Casual</option>
  <option value="Casual">Casual</option>
</select>
}
    </div>
  );
}

export default Filter;
