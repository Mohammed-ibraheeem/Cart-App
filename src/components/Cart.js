import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deletecart } from "../rtk/cardSlice";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const TotalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    return (
        <>
            <Container>
                <h1 className='py-5 m-4'> Welcom To Cart </h1>
                <Button variant="primary" onClick={() => dispatch(clear())} className="mb-3">Clear Cart</Button>
                <h5>TotalPrice: {TotalPrice.toFixed(2)}</h5>
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td><Image src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} ></Image></td>
                                <td>{product.price}$</td>
                                <td>{product.quantity}</td>
                                <td><Button variant="danger" onClick={() => dispatch(deletecart(product))} >Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>)
}
export default Cart;