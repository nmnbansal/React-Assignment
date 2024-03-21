// components/CoffeeList.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from './Redux/coffeeActions';

const App = () => {
  const dispatch = useDispatch();
  const coffeeList = useSelector((state) => state.coffee.coffeeList);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  return (
    <div>
      <h2>Coffee List</h2>
      <div className="grid">
        {coffeeList.map((coffee) => (
          <div key={coffee.id} className="coffee-item">
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
