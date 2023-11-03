import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function SingleView() {
  const [AllData, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  const fetchAllDatas = async () => {
    const result = await axios.get("/db.json");
    setData(result.data.contacts);
  };

  useEffect(() => {
    fetchAllDatas();
  }, []);

  const singleData = AllData.find((i) => i.id == id);

  return (
    <div>
      {singleData &&
          <Row className="p-5">
            <Col style={{paddingLeft:'50px'}} >
              <img style={{height:'500px',borderRadius:'0px' }} src={singleData.profile} alt="" />
            </Col>
            <Col style={{display:'grid',placeContent:"center",color:'white',backgroundColor:'black',border:'none'}}>
                <h1 className="text-info">Contact details :-</h1>
              <ListGroup className="p-5 fs-3 mt-5"  style={{color:'white',backgroundColor:'black',border:'none'}}>
                <ListGroup.Item className="text-start fs-4">Name: <span className="text-info">{singleData.name}</span></ListGroup.Item>
                <ListGroup.Item>Email: <span className="text-info fs-4">{singleData.email}</span></ListGroup.Item>
                <ListGroup.Item>Mobile no:<span className="text-info fs-4"> {singleData.mobile}</span></ListGroup.Item>
                <ListGroup.Item className="text-start fs-4">Location:<span className="text-info"> {singleData.location}</span></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        }
    </div>
  );
}

export default SingleView;