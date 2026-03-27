import './App.css'
import {Card} from "./components/Card";
import { Counter } from './components/Counter';
import type {Chai} from "./types";
import { List } from './components/List';


const menu : Chai[]=[
  {id:1 , name:"Pizza", price:300},
  {id:2 , name:"Burger", price:200},
  {id:3 , name:"Pasta", price:250},
]
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
      <div>
        <List items= {menu}/>
      </div>
    </>
  )
}

export default App
