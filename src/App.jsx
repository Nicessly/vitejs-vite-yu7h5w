import { useState } from 'react'
import MenuAppBar from './nav/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <MenuAppBar/>
      </div>
    </>
  )
}

export default App
