import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const ImportProductDetails = () => {
    const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext)

    useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [ id, user]);

    if(loading){
        return <div>Loading....</div>
    }
    return (
        <div>
      <div className="mt-10 mb-10 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.product_name}
            </h2>

            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            <div className="flex justify-between items-center text-gray-700 mb-2">
              <span className="font-medium">
                💰 <span className="text-blue-600">{product.price}</span>
              </span>
              <span className="text-sm">🌍 {product.origin_country}</span>
            </div>

            <div className="flex justify-between items-center text-gray-600 text-sm">
              <span>⭐ {product.rating} / 5</span>
              <span>📦 {product.available_quantity} pcs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ImportProductDetails;