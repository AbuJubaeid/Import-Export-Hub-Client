import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import useTitle from "../DynamicTitle/DynamicTitle";

const ImportProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  console.log(user)
  console.log(product)
  console.log(id)

  useTitle(
    product?.product_name ? `Product: ${product.product_name}` : "Loading..."
  );

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProduct(data);
        setLoading(false);
      });
  }, [id, user]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Imported Product Details
      </h1>

      {/* Product Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-2xl">
        {/* Left: Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {product.product_name}
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-between text-gray-700 mb-3 gap-2">
              <span className="font-medium">
                💰 <span className="text-blue-600">{product.price}</span>
              </span>
              <span className="text-sm sm:text-base">
                🌍 {product.origin_country}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-gray-600 text-sm gap-2">
              <span>⭐ {product.rating} / 5</span>
              <span>📦 {product.available_quantity} pcs available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportProductDetails;
