import { Link } from "react-router";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-[420px]">
        <div className="m-4 border-2 border-amber-100 rounded-2xl">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-40 rounded-2xl"
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

          {/* React Router Link */}
          <Link
            to={`/product/${product._id}`}
            className="mt-4 inline-block bg-sky-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
