import React, { useState } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { FaChartLine, FaMoon, FaSun } from 'react-icons/fa';
import './Lead.css';

const dummyData = [
  { id: 1, name: 'Bitcoin', calmrRatio: 0.5, overallProfit: 12000, avgDailyProfit: 100, winPercentage: 70, price: 2500000 },
  { id: 2, name: 'Ethereum', calmrRatio: 0.4, overallProfit: 9000, avgDailyProfit: 80, winPercentage: 65, price: 150000 },
  { id: 3, name: 'Ripple', calmrRatio: 0.35, overallProfit: 3000, avgDailyProfit: 50, winPercentage: 60, price: 20 },
  { id: 4, name: 'Litecoin', calmrRatio: 0.3, overallProfit: 2500, avgDailyProfit: 40, winPercentage: 55, price: 5000 },
  { id: 5, name: 'Cardano', calmrRatio: 0.28, overallProfit: 2200, avgDailyProfit: 35, winPercentage: 50, price: 100 },
  { id: 6, name: 'Polkadot', calmrRatio: 0.25, overallProfit: 2100, avgDailyProfit: 30, winPercentage: 48, price: 600 },
  { id: 7, name: 'Chainlink', calmrRatio: 0.2, overallProfit: 2000, avgDailyProfit: 25, winPercentage: 45, price: 1500 },
  { id: 8, name: 'Stellar', calmrRatio: 0.18, overallProfit: 1800, avgDailyProfit: 20, winPercentage: 42, price: 50 },
  { id: 9, name: 'VeChain', calmrRatio: 0.15, overallProfit: 1700, avgDailyProfit: 18, winPercentage: 40, price: 2 },
  { id: 10, name: 'Dogecoin', calmrRatio: 0.12, overallProfit: 1500, avgDailyProfit: 15, winPercentage: 38, price: 10 },
];

const slippageOptions = [
  { value: 0.1, label: '0.1%' },
  { value: 0.5, label: '0.5%' },
  { value: 1, label: '1%' },
  { value: 2, label: '2%' },
  { value: 5, label: '5%' },
];

const Leaderboard = () => {
  const [slippage, setSlippage] = useState(slippageOptions[0]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container className={`card shadow ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className='d-flex align-items-center justify-content-center pt-5'>
        <h1 className='fw-bolder'>LeaderBoard</h1>
      </div>
      <Row className="align-items-center my-4">
        <Col md={6}>
          <h2>Basic Backtest</h2>
        </Col>
        <Col md={6} className="text-end">
          <Form.Label className="me-2">Slippage:</Form.Label>
          <Select
            options={slippageOptions}
            value={slippage}
            onChange={setSlippage}
            className="d-inline-block"
            styles={{ container: (base) => ({ ...base, width: 100 }) }}
          />
          <Button variant="outline-secondary" onClick={toggleTheme} className="ms-3">
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive className={darkMode ? 'table-dark' : ''}>
        <thead className={darkMode ? 'thead-dark' : 'thead-light'}>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmr Ratio</th>
            <th>Overall Profit (Rs)</th>
            <th>Avg Daily Profit (Rs)</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((crypto, index) => (
            <tr key={crypto.id} className={index % 2 === 0 ? darkMode?'table-primary':'table-danger' :darkMode?"table-dark":"table-light" }>
              <td>{index + 1}</td>
              <td>{crypto.name}</td>
              <td>{crypto.calmrRatio}</td>
              <td>{crypto.overallProfit.toLocaleString()}</td>
              <td>{crypto.avgDailyProfit.toLocaleString()}</td>
              <td>{crypto.winPercentage}%</td>
              <td>{crypto.price.toLocaleString()}</td>
              <td>
                <Button className='btn btn-inlin' variant={crypto.id % 3 === 0 ? "outline-success" : "outline-info"}>
                  <FaChartLine /> {crypto.id % 3 === 0 ? "View" : "Buy"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
