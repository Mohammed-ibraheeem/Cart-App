import { Button, Card, Container } from "react-bootstrap";
import { addtocart } from "../rtk/cardSlice";
import { useDispatch } from "react-redux";

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    return (
        <>
            <Container className="py-3 mt-5">
                <Card>
                    <img style={{ width: '600px', height: '600px', marginLeft: '350px' }} src={product.image} className="card-img-top mt-5" alt={product.title} />
                    <div className="card-body ">
                        <h5 className="card-title">Title: {product.title}</h5>
                        <p className="card-text">Description: {product.description}</p>
                        <p>Category: {product.category} </p>
                        <p>Price: {product.price}$ </p>
                        <Button style={{ padding: '2px', margin: '5px', width: '12rem', height: '50px' }} variant="primary" onClick={() => dispatch(addtocart(product))}> Add to Card </Button>
                    </div>
                </Card>
            </Container>
        </>
    );
}
export default Product;