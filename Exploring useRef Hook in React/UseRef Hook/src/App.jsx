import { useRef } from 'react'
import UncontrolledInput from './UncontrolledInput';
import ChangeBackgroundColor from './ChangeBackground';

function App() {
  const inputRef = useRef(null)

  const handleInput = () => {
    inputRef.current.focus();
  }
  return (
    <>
    <h1>Focus Input</h1>
      <input type="text" ref={inputRef} onChange={handleInput} placeholder='Type here to focus' />
      <br /><br /><hr />
      <UncontrolledInput/>
      <br /><br /><hr />
      <ChangeBackgroundColor/>
    </>
  )
}

export default App
