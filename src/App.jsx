import './App.css'

import ShopItemFunc from './components/ShopItemFunc'

import data from '../data.json'

import { useState } from 'react'

function App() {

  const [items, setItems] = useState(data);

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {items.map(item => <ShopItemFunc key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default App
