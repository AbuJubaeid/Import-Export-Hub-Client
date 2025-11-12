import { useState } from "react";
import { useLoaderData } from "react-router";
import ProductsCard from "../ProductsCard/ProductsCard";

const AllProducts = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(products)
  const [loading, setLoading] = useState(true)

  const handleSearch =(e)=>{
     e.preventDefault()
    const search_text = e.target.search.value
    setLoading(true)

    fetch(`http://localhost:3000/search?search=${search_text}`)
    .then(res=>res.json())
    .then(data=>{
        setProduct(data)
        setLoading(false)
    })
  }
  return (
    <div>
       <form onSubmit={handleSearch} className=" mt-5">
       <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search"  placeholder="Search" />
      </label>
      <button className="btn">{loading ? "Searching...." : "Search"}</button>
     </form>
      <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
        {product.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
