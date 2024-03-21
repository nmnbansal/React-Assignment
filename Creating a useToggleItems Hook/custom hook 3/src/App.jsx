import useToggleItems from './useToggleItems';

function App() {
  const items = ["A", "B", "C"];
  const [state, toggleState] = useToggleItems(items, 1);

  return (
    <div>
      <h1>Current State: {state}</h1>
      <button onClick={toggleState}>Toggle State</button>
    </div>
  );
}

export default App;
