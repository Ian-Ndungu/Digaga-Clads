import React from 'react';

function ProductList({ products, filterProductsByCategory }) 
{
  // Create a set of unique categories from the products
  const uniqueCategories = Array.from(new Set(products.map((product) => product.category_name)));

  return (
    <div>
      <select onChange={(e) => filterProductsByCategory(e.target.value)}>
        <option value="All">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
        }

export default ProductList;
