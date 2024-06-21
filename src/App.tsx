import { useState } from 'react'

import './App.css'
import ShowTimeStamp from './components/ShowTimestamp'

function App() {
  const [hidden, setHidden] = useState(false)
  return (
    <>
      <div className={hidden ? 'hidden' : ''}>
        <ShowTimeStamp date="2024/6/20" />
      </div>
      <button onClick={() => setHidden(!hidden)}>toggle timestamp</button>
    </>
  )
}

export default App
