import axios from "axios";
import React, { useEffect, useState } from "react";
import RestCard from "../components/RestCard";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("/db.json");
    setContacts(result.data.contacts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {
        contacts.map((i) => (
          <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
            <RestCard item={i}></RestCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;