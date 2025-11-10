import { useLoaderData } from "react-router";
import ProductsCard from "../ProductsCard/ProductsCard";

const AllProducts = () => {
    const products = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
                {
                    products.map(product=><ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;