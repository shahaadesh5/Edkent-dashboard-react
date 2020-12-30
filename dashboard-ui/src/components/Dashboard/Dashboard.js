import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const stats = [
        {
            icon : "../images/icons/stat1.png",
            number : "245/500",
            text : "ATTRIBUTE 1"
        },
        {
            icon : "../images/icons/stat2.png",
            number : "120",
            text : "ATTRIBUTE 2"
        },
        {
            icon : "../images/icons/stat3.png",
            number : "125",
            text : "ATTRIBUTE 3"
        },
        {
            icon : "../images/icons/stat4.png",
            number : "0",
            text : "ATTRIBUTE 4"
        },
    ]

    return(
        <div className="dashboard-wrapper">
            <Container>
                <div style={{overflow:"hidden"}}>
                <div className="pull-right">
                    <Link to="/">
                        <Button className="upgrade-button">
                            Upgrade
                        </Button>
                    </Link>
                </div>
                </div>
                <div className="dashboard-top-row">
                    <Row>
                        {
                            stats.map((item, index) => {
                                return(
                                    <Col xs={6} sm={3} key={index}>
                                        <div className="top-row-grid">
                                            <Row style={{margin: 0}}>
                                                <Col xs={5} style={{padding:"0"}}>
                                                    <div className="stat-item-icon" style={{backgroundImage: `url(${item.icon})`}}>
            
                                                    </div>
                                                </Col>
                                                <Col xs={7} style={{padding:"0"}}>
                                                    <div className="stat-item-text text-center">
                                                        <p className="stat-number">
                                                            {item.number}
                                                        </p>
                                                        <p className="stat-text">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <div className="graph-wrapper">
                    <div className="pull-right">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Pick a date"
                            aria-label="Pick a date"
                            onClick={() => setShowDatePicker(toggleDate => !toggleDate)}
                            />
                            {/* <InputGroup.Append>
                                <img src="../images/icons/calendar.png" alt="Calendar" />
                            </InputGroup.Append> */}
                        </InputGroup>
                    </div>
                    {showDatePicker ? 
                    (
                        <div className="date-picker-wrapper">
                        <DateRangePicker
                            onChange={item => setState([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            direction="horizontal"
                        />
                        </div>
                    ) : null}
                </div>
            </Container>
        </div>
    )
}

export default Dashboard;