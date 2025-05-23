import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Button } from 'react-bootstrap';
// import { Container, Typography, Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Container className='mt-5'>
          <h1 className='text-primary'>Inmobiliaria</h1>
          <Button variant='success'>Ver propiedades</Button>
        </Container> 
     
      {/* <Container sx={{mt : 5}}>
        <Typography variant="h4" color="primary" >Hola</Typography>
        <Button variant='contained' color="primary">Guardar</Button>
      </Container> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
