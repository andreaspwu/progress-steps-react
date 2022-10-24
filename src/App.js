import { useEffect, useState } from 'react'
import Circle from './components/Circle'

function App() {
  const [circle] = useState(4)
  const [active, setActive] = useState(1)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(((active - 1) / (circle - 1)) * 100)
  }, [circle, active])

  const arr = []
  for (let i = 1; i <= circle; i++) {
    arr.push(
      <Circle classname={i <= active ? 'circle active' : 'circle'} key={i}>
        {i}
      </Circle>
    )
  }
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={{ width: width + '%' }}></div>
        {arr}
      </div>

      <button
        className="btn"
        disabled={active > 1 ? false : true}
        onClick={() => {
          active <= 1 ? setActive(1) : setActive(active - 1)
        }}
      >
        Prev
      </button>
      <button
        className="btn"
        disabled={active >= circle ? true : false}
        onClick={() => {
          active >= circle ? setActive(circle) : setActive(active + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default App
