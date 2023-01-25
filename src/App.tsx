import { useState } from 'react'

const isDiv = false;
const isDirect = false;
const isDirectNoFragment = true;
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" onClick={()=> setCount(v => v + 1)}>
      Hello {count}
      {Array(100).fill(null).map((_, i) => (
        <Renderer key={i} count={0} />
      ))}
    </div>
  )
}
function Renderer({count}: {count: number}): JSX.Element {
  if (count > 1000) {
    return <div>Content</div>
  }
  if (isDiv) {
    return <div><Renderer count={count+1}/></div>
  } else if (isDirect) {
    return <>{Renderer({count: count+1})}</>
  } else if (isDirectNoFragment) {
    return Renderer({count: count+1})
  } else {
    return <><Renderer count={count+1}/></>
  }
}

export default App
