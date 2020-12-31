import { Row, Col, Container, InputGroup, FormControl, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
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

    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    const chart = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Attribute 1',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#32d141',
            borderWidth: 2,
            data: [180, 260, 430, 220, 500]
          },
          {
            label: 'Attribute 2',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#266ae6',
            borderWidth: 2,
            data: [210, 170, 190, 210, 185]
          }
        ]
      }

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
                            style={{paddingRight: "30px",
                                backgroundImage: `url('../images/icons/calendar.png')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 5px center",
                                cursor: "pointer",
                                minWidth: "235px"
                            }}
                            onClick={() => setShowDatePicker(toggleDate => !toggleDate)}
                            value={
                                state[0].startDate.getDate()+" "+monthNames[state[0].startDate.getMonth()]+" "+state[0].startDate.getFullYear()+" - "+
                                state[0].endDate.getDate()+" "+monthNames[state[0].endDate.getMonth()]+" "+state[0].endDate.getFullYear()}
                            />
                            {/* <InputGroup.Append style={{width:"20px"}}>
                                <img src="../images/icons/calendar.png" alt="Calendar" />
                            </InputGroup.Append> */}
                        </InputGroup>
                    </div>
                    <div>
                        <Line 
                         data={chart}
                         options={{
                           title:{
                             display:true,
                             text:'Analytics',
                             fontSize:20
                           },
                           legend:{
                             display:true,
                             position:'right'
                           }
                         }} />
                    </div>
                    <Modal dialogClassName="modal-75w" show={showDatePicker} onHide={() => setShowDatePicker(false)}>
                        <Modal.Header closeButton>
                        <Modal.Title>Pick a date range</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <DateRangePicker
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard;