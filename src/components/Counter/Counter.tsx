import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const onIncrease = () => {
    setCount((prev) => prev + 1)
  }

  const onDecrease = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter