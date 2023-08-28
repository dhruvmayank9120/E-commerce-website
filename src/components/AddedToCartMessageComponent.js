import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Alert
      show={show}
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>The product was added to your cart</Alert.Heading>
      <p>
        <Button variant="success" onClick={() => setShow(false)}>
          Go Back
        </Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Go to Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
