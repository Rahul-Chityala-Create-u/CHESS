import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './board.css'
import './PeicesPosition.css'
import ChessBoard from './components/ChessBoard'
import UpdateTo from './components/UpdateTo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UpdateTo></UpdateTo>
      <ChessBoard>
      </ChessBoard>
    </>
  )
}

export default App
