const AddProducts = () => {
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
    };
    console.log(formData)
    fetch('http://localhost:3000/products', {
        method: "POST",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("after post data", data)
    })
    .catch(error=>{
        console.log(error)
    })

    e.target.reset()
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Origin Country
            </label>
            <input
              type="text"
              name="origin_country"
              placeholder="e.g. Bangladesh"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Rating */}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Available Quantity */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Available Quantity
            </label>
            <input
              type="number"
              name="available_quantity"
              placeholder="Enter available quantity"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
