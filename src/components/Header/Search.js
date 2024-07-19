import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdults = () => {
    setAdults(adults + 1);
  };

  const handleAdultsSub = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildren = () => {
    setChildren(children + 1);
  };

  const handleChildrenSub = () => {
    if (children > 1) {
      setChildren(children - 1);
    }
  };
  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null); // Reset check-out date
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <Container fluid className="p-5 mb-6   hero">
      <Navbar className=" justify-content-between search-container">
        <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <InputGroup className="checkin-out">
            <Col xs="auto">
              <div className="inner-addon right-addon">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInChange}
                  className="form-control checkIn"
                  placeholderText="Check-In"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                />
              </div>
            </Col>
            <Col xs="auto">
              <InputGroup>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <div className="inner-addon right-addon">
                  <DatePicker
                    selected={checkOutDate}
                    onChange={handleCheckOutChange}
                    className="form-control checkOut"
                    placeholderText="Check-Out"
                    dateFormat="yyyy-MM-dd"
                    minDate={
                      checkInDate
                        ? new Date(checkInDate).setDate(
                            new Date(checkInDate).getDate() + 1
                          )
                        : new Date()
                    }
                  />
                </div>
              </InputGroup>
            </Col>
          </InputGroup>
        </Form>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            People Staying
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="d-flex justify-content-center pl-5 pr-5">
              <p className="font-weight-bold">Adults</p>
              <div></div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <button onClick={handleAdultsSub}>-</button>
                {adults}
                <button onClick={handleAdults}>+</button>
              </div>
            </div>
            <div className="d-flex justify-content-center pl-5 pr-5">
              <p className="font-weight-bold">Children</p>
              <div></div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <button onClick={handleChildrenSub}>-</button>
                {adults}
                <button onClick={handleChildren}>+</button>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </Container>
  );
};

export default Search;
