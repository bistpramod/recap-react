import './App.css'
import {Card} from "./components/Card";
import { Counter } from './components/Counter';

function App() {
 

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <Card name ="pizza" price={500} />
        <Card name ="Key" price={50} />
      </div>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
