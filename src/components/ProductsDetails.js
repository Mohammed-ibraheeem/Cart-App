import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Prod";
function ProductsDetails() {
    const api_url = "https://api-vr4k.onrender.com/product";
    const [product, setproduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productID}`)
            .then((res) => res.json())
            .then((product) => setproduct(product));
    }, [params.productID])
    return (
        <Product product={product} />
    )
}
export default ProductsDetails;