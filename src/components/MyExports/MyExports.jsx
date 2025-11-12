import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null); // ref for <dialog>

  useEffect(() => {
    fetch(`http://localhost:3000/myExports?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div>loading....</div>;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myExports/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // Update submit
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      product_image: form.product_image.value,
      product_name: form.product_name.value,
      price: parseFloat(form.price.value),
      origin_country: form.origin_country.value,
      rating: parseFloat(form.rating.value),
      available_quantity: parseInt(form.available_quantity.value),
    };

    fetch(`http://localhost:3000/myExports/${selectedProduct._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        setProducts((prev) =>
          prev.map((p) =>
            p._id === selectedProduct._id ? { ...p, ...updatedProduct } : p
          )
        );
        modalRef.current.close(); // close modal
        setSelectedProduct(null);
        Swal.fire("Updated!", "Your product has been updated.", "success");
      })
      .catch((err) => console.log(err));
  };

  if (products.length === 0)
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          There is no product available
        </h2>
      </div>
    );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-[420px]"
          >
            <div className="m-4 border-2 border-amber-100 rounded-2xl">
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-full h-40 rounded-2xl object-cover"
              />
            </div>

            <div className="p-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.product_name}
              </h2>

              <p className="text-xl font-bold text-emerald-600 mb-1">
                ৳ {product.price}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Origin:{" "}
                <span className="font-medium">{product.origin_country}</span>
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .587l3.668 7.431L23.4 9.748l-5.7 5.556L18.9 24 12 20.201 5.1 24l1.2-8.696L.6 9.748l7.732-1.73L12 .587z" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-700 font-medium">
                    {product.rating} / 5
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Available:{" "}
                  <span className="font-medium">
                    {product.available_quantity} pcs
                  </span>
                </p>
              </div>

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProduct(product);
                    modalRef.current.showModal();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <form
          onSubmit={handleUpdateSubmit}
          className="modal-box flex flex-col gap-3"
        >
          <h3 className="font-bold text-lg text-center">Update Product</h3>
          <input
            type="text"
            name="product_image"
            defaultValue={selectedProduct?.product_image || ""}
            placeholder="Product Image URL"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="product_name"
            defaultValue={selectedProduct?.product_name || ""}
            placeholder="Product Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            defaultValue={selectedProduct?.price}
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="origin_country"
            defaultValue={selectedProduct?.origin_country || ""}
            placeholder="Origin Country"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            step="0.1"
            name="rating"
            defaultValue={selectedProduct?.rating}
            placeholder="Rating"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="available_quantity"
            defaultValue={selectedProduct?.available_quantity}
            placeholder="Available Quantity"
            className="input input-bordered w-full"
          />

          <div className="modal-action justify-between">
            <button
              type="button"
              className="btn"
              onClick={() => modalRef.current.close()}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyExports;


