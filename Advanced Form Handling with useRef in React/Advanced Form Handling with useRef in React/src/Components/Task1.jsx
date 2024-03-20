import { useRef } from 'react';

function Task1() {
  
  const inputRefs = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
  };

  const focusInput = (field) => {
    inputRefs[field].current.focus();
  };

  return (
    <div>
        <h1>Task 1</h1>
      <input ref={inputRefs.ref1}  onChange={() => focusInput('ref1')} type="text" placeholder="ref 1" />
      <input ref={inputRefs.ref2} onChange={() => focusInput('ref2')} type="text" placeholder="ref 2" />
      <input ref={inputRefs.ref3} onChange={() => focusInput('ref3')} type="text" placeholder="ref 3" />
    </div>
  );
}

export default Task1;
