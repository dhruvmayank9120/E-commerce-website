import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  var options = {
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });

  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image fluid src="/images/games-category.png" />
          </div>
          <br />
          <div id="second">
            <Image fluid src="/images/monitors-category.png" />
          </div>
          <br />
          <div id="third">
            <Image fluid src="/images/tablets-category.png" />
          </div>
          <br />
          <div id="fourth">
            <Image fluid src="/images/games-category.png" />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">%345</span>
                </ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe
                    <Rating readonly size={10} initialValue={4} />
                    <br />
                    20-09-2001
                    <br />
                    Lorem laboris deserunt veniam reprehenderit et magna et
                    magna fugiat tempor anim veniam consequat et. Labore dolor
                    fugiat laborum eu nisi. Quis Lorem eu mollit cupidatat ut
                    tempor consectetur. Reprehenderit ea ullamco proident culpa
                    esse sit nulla ipsum duis. Dolor ex nulla fugiat nulla.
                    Culpa ad ex tempor in in irure excepteur sunt. Laboris
                    cupidatat commodo duis nostrud nisi laboris eiusmod ex
                    aliqua.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (Very Good)</option>
              <option value="4">4 ( Good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
