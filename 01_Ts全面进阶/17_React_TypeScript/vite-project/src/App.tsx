import { useState } from 'react'
// import { FC } from 'react';
import type { FC } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Container from './Container';
import Cell from './Cell'

interface IDataStruct {
  name: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
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
      <Container visible={true} controller={() => { }} >
        <div>React + TypeSript</div>
      </Container>
      <Cell<IDataStruct> field='name'></Cell>
      <Cell<IDataStruct> field='age'></Cell>
    </div>
  )
}

export default App
