import { useState } from 'react'
import Comment from '../Comment/Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comment/>
    </>
  )
}

export default App
