import { useLoaderData } from "react-router";

const ProductDEtails = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            {}
        </div>
    );
};

export default ProductDEtails;