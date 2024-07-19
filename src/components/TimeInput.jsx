import React, { useState } from 'react';

const TimeInput = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [dataManual, setDataManual] = useState(null);

    const handleHoursChange = (e) => setHours(e.target.value);
    const handleMinutesChange = (e) => setMinutes(e.target.value);
    const handleSecondsChange = (e) => setSeconds(e.target.value);

    const handleSendDate = async (data) => {
        console.log(hours, minutes, seconds);

        if((hours<0 || hours>23) || (minutes<0 || minutes>59) || (seconds<0 || seconds>59)){
            alert("Por favor, ingrese una hora válida");

        }else{
            try {
                const response = await fetch('https://prueba-tecnica-o5fu.onrender.com/api/v1/fibonacciUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
    
                const result = await response.json();
                setDataManual(result.message);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <p style={{ display: "flex", justifyContent: "center" }}>
                Hora seleccionada: {hours.padStart(2, '0')}:{minutes.padStart(2, '0')}:{seconds.padStart(2, '0')}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <label style={{ paddingRight: "10px", paddingLeft: "10px" }} htmlFor="hours">Horas:</label>
            <input
                id="hours"
                type="number"
                min="0"
                max="23"
                value={hours}
                onChange={handleHoursChange}
                style={{ width: '3rem', marginRight: '0.5rem' }}
            />
            <label style={{ paddingRight: "10px", paddingLeft: "10px" }} htmlFor="minutes">Minutos:</label>
            <input
                id="minutes"
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={handleMinutesChange}
                style={{ width: '3rem', marginRight: '0.5rem' }}
            />
            <label style={{ paddingRight: "8px", paddingLeft: "12px" }} htmlFor="seconds">Segundos:</label>
            <input
                id="seconds"
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={handleSecondsChange}
                style={{ width: '3rem' }}
            />
            
            <button onClick={() => handleSendDate({ hours: hours, minutes: minutes, seconds: seconds })}
                style={{ backgroundColor: "#007bff", color: "white", border: "none", fontSize: "16px", borderRadius: "5px", marginLeft: "10px" }}>
                Enviar
            </button>
            </div>


            {dataManual && (
                <div style={{ maxWidth: "600px", overflow: "auto", marginTop:"20px" }}>
                    <ul style={{ display: "flex"}}>
                        {dataManual?.map((fibonacci, index) => (
                            <li style={{ paddingRight: "40px" }} key={index}>{fibonacci}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TimeInput;
