import React, { useEffect, useState } from "react";

function Kids() {
  const [category, setCategory] = useState("men");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      const url = `https://digaga-clads-main.onrender.com/${category}`;
      // const url = `https://dummyjson.com/products/`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setItems(json.products);

          console.log(json);

          setLoading(false);
        } else {
          setLoading(false);
          throw response;
        }
      } catch (e) {
        setItems(e);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [category]);

  function renderProduct(product) {
    return (
      <div key={product.id} className="product">
        <a href="https://digaga-clads-main.onrender.com/kids">
          <h3>
            {product.brand} - {product.title}
          </h3>
        </a>
        <img
          src={product.images[0]}
          width={200}
          height={200}
          alt={product.name}
        />
        <p>{product.description}</p>
      </div>
    );
  }

  return (
    <>
      <h1>Digaga Clads</h1>
      <div>
        <select
          name=""
          value={category}
          onChange={(e) => {
            console.log(e.target.value);
            setCategory(e.target.value);
          }}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="children">Children</option>
        </select>
      </div>
      <div>{loading ? "Loading" : items.map(renderProduct)}</div>
    </>
  );
}

export default Kids;