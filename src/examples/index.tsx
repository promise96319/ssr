import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      hello world
      count: {count}
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}
