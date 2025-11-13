import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import useTitle from "../DynamicTitle/DynamicTitle";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [importQty, setImportQty] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useTitle(
    product?.product_name ? `Product: ${product.product_name}` : "Loading..."
  );

  useEffect(() => {
    fetch(`https://import-export-hub-server.vercel.app/products/${id}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id, user]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const handleImport = () => {
    if (!importQty) {
      toast.error("Please enter quantity");
      return;
    }

    const importDetail = {
      ...product,
      imported_by: user.email,
      imported_quantity: parseInt(importQty),
    };

    fetch("https://import-export-hub-server.vercel.app/my-imports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(importDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product imported successfully");
          navigate("/myImports");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Product Details
      </h1>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-2xl">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
              {product.product_name}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-between text-gray-700 mb-2 gap-2">
              <span className="font-medium">
                💰 <span className="text-blue-600">{product.price}</span>
              </span>
              <span className="text-sm">🌍 {product.origin_country}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-gray-600 text-sm gap-2">
              <span>⭐ {product.rating} / 5</span>
              <span>📦 {product.available_quantity} pcs available</span>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Import Now
          </button>
        </div>
      </div>

      {/* Import Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              Import Product
            </h3>
            <label className="block text-sm text-gray-600 mb-2">
              Enter quantity (Available: {product.available_quantity})
            </label>
            <input
              type="number"
              value={importQty}
              onChange={(e) => setImportQty(e.target.value)}
              min="1"
              max={product.available_quantity}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Enter quantity"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                disabled={
                  !importQty ||
                  importQty <= 0 ||
                  parseInt(importQty) > product.available_quantity
                }
                onClick={() => {
                  handleImport();
                  setShowModal(false);
                }}
                className={`px-4 py-2 rounded-xl text-white transition ${
                  parseInt(importQty) > product.available_quantity
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;



