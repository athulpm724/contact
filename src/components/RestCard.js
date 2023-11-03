import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RestCard({ item }) {
  return (
    <div>
    <Link to={`/view/${item.id}`}  style={{textDecoration:'none'}}>
          <Card style={{ width: "18rem" ,backgroundColor:'red',color:"white"}}>
            <Card.Img variant="top" src={item.profile} />
            <Card.Body>
              <Card.Title> {item.name}</Card.Title>
              <Card.Text>{item.location}</Card.Text>
              <Card.Title>{item.mobile}</Card.Title>
              <Card.Text>{item.email}</Card.Text>
              <Button variant="danger" style={{borderRadius:'0rem' , backgroundColor:'black',color:'white'}}>VIEW PROFILE</Button>
            </Card.Body>
          </Card>
    </Link>


    </div>
  );
}

export default RestCard;