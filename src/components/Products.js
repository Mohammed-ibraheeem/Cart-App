import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../rtk/productsSlice';
import { addtocart } from '../rtk/cardSlice';
import { Link } from 'react-router-dom';

function Products() {

    const products = useSelector((state => state.products));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch])
    return (
        <>
            <Container className='py-5'>
                <Row className='py-5'>
                    {products.map((product) => (
                        <Col key={product.id}>
                            <Card style={{ width: '18rem', height: "530px", padding: '2px', margin: '6px' }}>
                                <Card.Img style={{ height: "300px" }} variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title> Title :{product.title.slice(0, 30)}.....</Card.Title>
                                    { /*<Card.Text>
                                        Description: {product.description.slice(0, 50)}....
                                    </Card.Text>*/}
                                    <Card.Text>
                                        Price : {product.price}$
                                    </Card.Text>
                                    <center>

                                        <Button style={{ padding: '2px', margin: '5px', width: '8rem' }} variant="primary" onClick={() => dispatch(addtocart(product))}> Add to Card </Button>
                                        < br />
                                        <Link to={`/product/${product.id}`} style={{ padding: '2px', margin: '5px', width: '8rem' }} className="btn btn-primary"> Detalis </Link>
                                    </center>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container >
        </>)
}
export default Products;