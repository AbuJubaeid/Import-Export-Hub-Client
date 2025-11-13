import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      product_name: e.target.product_name.value,
      product_image: e.target.product_image.value,
      price: e.target.price.value,
      origin_country: e.target.origin_country.value,
      rating: e.target.rating.value,
      available_quantity: e.target.available_quantity.value,
      description: e.target.description.value,
      created_by: user.email,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) toast.success("Product added successfully");
        navigate("/myExports");
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };

  return (
    <section className="py-5 bg-gradient-to-r from-blue-50 via-white to-blue-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Image URL
            </label>
            <input
              type="text"
              name="product_image"
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="product_name"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Price & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Available Quantity
              </label>
              <input
                type="number"
                name="available_quantity"
                placeholder="Enter available quantity"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Origin Country & Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Origin Country
              </label>
              <input
                type="text"
                name="origin_country"
                placeholder="e.g. Bangladesh"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                placeholder="1-5"
                min="1"
                max="5"
                step="0.1"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description"
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;

