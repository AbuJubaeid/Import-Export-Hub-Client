import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyImports = () => {
      const { user } = useContext(AuthContext);
      const [loading, setLoading] = useState(true);
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch(`http://localhost:3000/my-imports?email=${user.email}`)
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
          confirmButtonText: "Yes, remove it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/myExports/${id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => res.json())
              .then(() => {
                setProducts((prev) => prev.filter((p) => p._id !== id));
                Swal.fire("Removed!", "Your product has been removed.", "success");
              })
              .catch((err) => console.log(err));
          }
        });
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
        <div>
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
        </div>
    );
};

export default MyImports;