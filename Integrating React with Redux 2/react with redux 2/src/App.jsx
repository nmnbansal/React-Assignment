// src/components/App.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFootballMatches } from './Redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector(state => state.football);

  useEffect(() => {
    dispatch(fetchFootballMatches());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching data</p>}
      <ul>
        {footballMatches.map(match => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
