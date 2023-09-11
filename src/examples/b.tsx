import { useState } from 'react'
import { Link } from 'react-router-dom'

export function BBB() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>bbb</h1>
      <Link to="/a">
        跳转到 <code>aaa</code>
      </Link>
      <Link to="/">
        跳转到 <code>首页</code>
      </Link>
      count: {count}
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}
