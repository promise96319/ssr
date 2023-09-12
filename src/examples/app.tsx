import { Suspense, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LazyLoadComp } from './suspense'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Stream Document</title>
      </head>
      <body>
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

        <Suspense fallback={<div>loading...</div>}>
          <LazyLoadComp></LazyLoadComp>
        </Suspense>
      </div>
      </body>
    </html>
  )
}
