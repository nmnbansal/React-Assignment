// components/SortingSidebar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoffee } from '../actions/coffeeActions';

const SortingSidebar = () => {
  const dispatch = useDispatch();

  const handleSort = (sortOption) => {
    // Dispatch action to update sorting option in store and fetch coffee data again
    dispatch(fetchCoffee());
  };

  return (
    <div className="sidebar">
      <h3>Sort By</h3>
      <button onClick={() => handleSort('name')}>Name</button>
      <button onClick={() => handleSort('price')}>Price</button>
      {/* Add more sorting options as needed */}
    </div>
  );
};

export default SortingSidebar;
