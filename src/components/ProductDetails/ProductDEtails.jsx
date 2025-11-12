import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const ProductDEtails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext)

  const navigate = useNavigate()

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

    const handleImport =()=>{
      const importDetail ={
        created_by: product.created_by,
        product_image: product.product_image,
        product_name: product.product_name,
        price: product.price,
        origin_country: product.origin_country,
        rating: product.rating,
        available_quantity: product.available_quantity,
        upload_date: product.upload_date,
        description: product.description,
        imported_by: user.email,
      }
      fetch("http://localhost:3000/my-imports", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(importDetail)
              })
                .then((res) => res.json())
                .then((data) => {
                  if(data.acknowledged){
                    toast.success("Product imported successfully")
                  }
                  navigate('/myImports')
                })
                .catch((err) => console.log(err));
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

          <button
          onClick={handleImport}
           className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200 cursor-pointer">
            Import Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDEtails;
