import { useState } from "react";
import { useLoaderData } from "react-router";
import useTitle from "../DynamicTitle/DynamicTitle";
import ProductsCard from "../ProductsCard/ProductsCard";

const AllProducts = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(products);

  useTitle(product?.product_name ? `Product: ${product.product_name}` : "Loading...");

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    fetch(`https://import-export-hub-server.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <label className="relative w-full sm:w-auto flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Search products..."
            className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </label>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
          Search
        </button>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

      {/* No Products Message */}
      {product.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No products found. Try a different search.
        </p>
      )}
    </div>
  );
};

export default AllProducts;
