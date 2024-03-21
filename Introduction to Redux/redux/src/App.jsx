import { useSelector, useDispatch } from 'react-redux';
import { addData } from './Redux/actions';

const MainComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  const handleAddData = () => {
    const id = Math.floor(Math.random() * 1000); 
    const newData = { id, name: `Example ${id}` }; 
    dispatch(addData(newData));
  };

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
};

export default MainComponent;
