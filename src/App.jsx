import { useState } from 'react'
import './App.css'
import './Main.scss'
import CatCard from './components/CatCard'

function App() {
  const [count, setCount] = useState(0)
  let catFood = [ // за наличие корма отвечает foodStatus
    {foodStatus:true, filler: 'с фуа-гра', numberOfServings: 10, mouseCount: 1,customerStatus:' ', inStock: true , footerInfo: 'Печень утки разварная с артишоками.'},
    {foodStatus:true, filler: 'с рыбой', numberOfServings: 40, mouseCount: 2,customerStatus:' ', inStock: true, footerInfo: 'Головы щучьи с чесноком да свежайшая сёмгушка.' },
    {foodStatus:false, filler: 'с курой', numberOfServings: 100, mouseCount: 5, customerStatus:'заказчик доволен', inStock: true, footerInfo: 'Филе из цыплят с трюфелями в бульоне.' }
  ]
  return (
    <div className='app'>
      <div className='header'>
        <span>Ты сегодня покормил кота?</span>
      </div>
      <div className='content'>
        {catFood.map(food=><CatCard 
        foodStatus={food.foodStatus}
        filler={food.filler} 
        numberOfServings={food.numberOfServings} 
        mouseCount={food.mouseCount} 
        customerStatus={food.customerStatus} 
        footerInfo={food.footerInfo}
        />)}
      </div>
    </div>
  )
}

export default App
