import { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef("");

  const handleChange = () => {
    console.log('Current value:', inputRef.current.value);
  };

  return (
    <div>
      <h1>Uncontrolled Input</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Type something to see control"
      />
      <p>Current Value: {inputRef.current.value}</p>
    </div>
  );
};

export default UncontrolledInput;
