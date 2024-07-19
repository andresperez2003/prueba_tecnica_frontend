import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'



const AllFibonacci = () => {

    const [data, setData] = useState([])

useEffect(() => {
    handleData()
}, [])

const handleData= async()=>{
    
    try {
        const responde = await fetch('https://prueba-tecnica-43xd.onrender.com/api/v1/fibonacci', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json()).then((data) => { console.log(data.message); setData(data.message) });
      } catch (error) {
        console.error('Error:', error);
      }
}


  return (
    <TableContainer component={Paper}>
    <Table style={{ minWidth: 1260 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Hora</TableCell>
          <TableCell >
            Serie Fibonacci
          </TableCell>
          <TableCell>Tipo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((fibonacci) => (
          <TableRow
            key={fibonacci.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {fibonacci.hours}: {fibonacci.minutes} : {fibonacci.seconds}
            </TableCell>
            <TableCell >
              <p >{fibonacci.serie_fibonacci}</p>
            </TableCell>
            <TableCell component="th" scope="row">
              {fibonacci.type}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AllFibonacci