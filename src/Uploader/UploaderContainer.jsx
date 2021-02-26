import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const UploaderContainer = (props) => {
  const [fileToPreview, setFileToPreview] = useState(null);
  const reader = new FileReader();

  const onFileChange = (e) => {
    setFileToPreview(null);
    const file = e.target.files[0];

    reader.onload = (e) => {
      if (e.target.result) {
        setFileToPreview(e.target.result);
      } else {
        setFileToPreview(null);
      }
    };
    reader.readAsDataURL(file);
    console.log(e);
  };

  const handlaSendButtonClick = () => {
    //när klick på skicka görs
    fetch("http://example.com/movies.json").then((response) => {
      console.log(response);
    });
  };

  console.log(fileToPreview);
  return (
    <Row>
      <Col sm={6} className="preview-col">
        {fileToPreview && <embed src={fileToPreview}></embed>}
      </Col>
      <Col sm={6} className="form-col">
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Fil</Form.Label>
            <Form.Control type="file" onChange={onFileChange}></Form.Control>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label>Nytt DNR GD</Form.Label>
            <Form.Control placeholder="dnr"></Form.Control>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label>Signera själv</Form.Label>
            <Form.Control placeholder="signatur"></Form.Control>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label>Motpart</Form.Label>
            <Form.Control placeholder="motpart"></Form.Control>
          </Form.Group>

          <Button onClick={handlaSendButtonClick}>Skicka</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UploaderContainer;
