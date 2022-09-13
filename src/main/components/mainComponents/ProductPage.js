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
            id: 1,
            title: "product_name",
            image: "img",
        },
        {
            id: 2,
            title: "product_name",
            image: "img",
        },
        {
            id: 3,
            title: "product_name",
            image: "img",
        },
        {
            id: 4,
            title: "product_name",
            image: "img",
        },
        {
            id: 5,
            title: "product_name",
            image: "img",
        },
        {
            id: 6,
            title: "product_name",
            image: "img",
        },
        {
            id: 7,
            title: "product_name",
            image: "img",
        },
        {
            id: 8,
            title: "product_name",
            image: "img",
        },
        {
            id: 9,
            title: "product_name",
            image: "img",
        },
    ];

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
                                    <Col sm={12} md={3} lg={3}>
                                        <Card
                                            // id={"demo"}
                                            // onMouseOver={cardHover}
                                            // onMouseOut={cardHoverAfter}
                                            key={item.id}
                                            className={'m-3 p-3 products-card'}
                                        >
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
//
// function cardHover() {
//     let card = document.getElementById("demo");
//     card.style.scale = 1.3;
// }
//
// function cardHoverAfter(){
//     let card = document.getElementById("demo");
//     card.style.scale = 1;
// }