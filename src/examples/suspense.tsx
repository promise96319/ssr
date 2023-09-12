import axios from 'axios'

let status = 'pending'
let result = ''
function wrapPromise(promise: any) {
  const suspender = promise.then(
    (r: any) => {
      status = 'success'
      result = r
    },
    (e: any) => {
      status = 'error'
      result = e
    },
  )

  if (status === 'pending')
    throw suspender

  else if (status === 'error')
    throw result

  else if (status === 'success')
    return result
}

export function LazyLoadComp() {
  const res: any = wrapPromise(axios.get('http://localhost:9000/api/data/1'))
  return <div>lazy load comp:  {res?.data?.data}</div>

  // return 111
}
