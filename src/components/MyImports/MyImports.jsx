import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-imports?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [user]);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500 text-lg">Loading...</div>
    );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myImports/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            Swal.fire(
              "Removed!",
              "Your product has been removed.",
              "success"
            );
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (products.length === 0)
    return (
      <div className="text-center mt-20 text-gray-700">
        <h2 className="text-2xl font-semibold">
          You have not imported any products yet.
        </h2>
      </div>
    );

  return (
    <section className="bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        My Imported Products
      </h2>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col"
          >
            <div className="p-4 border-b border-gray-100">
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-full h-44 object-cover rounded-xl"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.product_name}
                </h3>
                <p className="text-xl font-bold text-emerald-600 mb-1">
                  ৳ {product.price}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Origin:{" "}
                  <span className="font-medium">{product.origin_country}</span>
                </p>

                <div className="flex items-center justify-between mb-3">
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
                    Imported Quantity:{" "}
                    <span className="font-medium">{product.imported_quantity} pcs</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 btn btn-danger"
                >
                  Remove
                </button>
                <Link
                  to={`/importedProduct/${product._id}`}
                  className="btn btn-primary"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyImports;
