import {Card, Col, Container, Row} from "react-bootstrap";
import "../../styles/productPageStyle.css";

export default function ProductPage() {
    const productList = [
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },
        {
            id: 0,
            title: "product_name",
            image: "img",
        },

    ]

    return (
        <div className={'mainContent d-flex justify-content-center align-items-center border rounded p-2 mb-2'}>
            <Container fluid>
                <Row className={'text-center'}>
                    <Col sm={12} md={12} lg={12} className={'products border rounded'}>
                        <h1>
                            მერჩი
                        </h1>
                        <Row>
                            {
                                productList.map(item=>(
                                    <Col key={item} sm={12} md={3} lg={3}>
                                        <Card className={'m-3 p-3 products-card'}>
                                            <Card.Header>
                                                <Card.Title>
                                                    {`${item.id} - ${item.title}`}
                                                </Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                {item.image}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}