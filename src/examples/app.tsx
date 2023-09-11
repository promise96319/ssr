import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>app</h1>
      <Link to="/a">
        跳转到 <code>aaa</code>
      </Link>
      <Link to="/b">
        跳转到 <code>bbb</code>
      </Link>
      count: {count}
      <button onClick={() => setCount(count + 1)}>click me</button>

      <section>outlet</section>
      <Outlet />
    </div>
  )
}
