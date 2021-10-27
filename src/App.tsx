import React from 'react';
import './App.css';
import Cart from './Components/Cart';
import Products from './Components/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
        <Cart />
      </header>
    </div>
  );
}

export default App;
