import { Container } from 'react-bootstrap';
import Clock from './Clock';
import React, { useState, useEffect } from 'react';
import DateManual from './DateManual';





const TimeInputForm = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [data, setData] = useState(null)
  const [showManual, setManual] = useState(false)
  const [showAutomatic, setAutomatic] = useState(false)


  const handleManualDate = async()=>{
    setManual(true)
    setAutomatic(false)
  }


  const handleAutoClick = async () => {
    try {
      setAutomatic(true)
      const responde = await fetch('https://prueba-tecnica-43xd.onrender.com/api/v1/fibonacciAutomatic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json()).then((data) => { console.log(data.message); setData(data.message) });
    } catch (error) {
      console.error('Error:', error);
    }
    setManual(false)
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "87vh" }}>
        <h1 className="visually-hidden">Serie Fibonacci</h1>
        { showAutomatic && <Clock />}
        { showAutomatic &&
        <div  style={{ maxWidth:"500px", overflow:"auto"}}>
          <ul style={{display:"flex"}}>
            {data?.map((fibonacci, index) => (
                <li style={{paddingRight:"40px"}} key={index}>{fibonacci}</li>))}
          </ul>
      </div>
      }
    <div> {showManual && <DateManual/>}</div>

        <div style={{ marginTop:"40px", padding: "10px", display: "flex" }}>
          <div style={{ paddingRight: "10px" }}>
            <button
              onClick={handleAutoClick}
              style={{ backgroundColor: "#007bff", color: "white", border: "none", fontSize: "16px", borderRadius: "5px" }}
            >
              Automático
            </button>
          </div>
          <div>
            <button onClick={handleManualDate}
              style={{ backgroundColor: "#007bff", color: "white", border: "none", fontSize: "16px", borderRadius: "5px" }}
            >
              
              Manual
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TimeInputForm;
