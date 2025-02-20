import React from 'react';
import './App.css';
import MenuBar from './menu/menu.tsx';
import Item from './body/items/item.tsx';
import Header from './body/header/header.tsx';

function App() {
  return (
    <section>
      <MenuBar></MenuBar>
      <Header></Header>
      <Item></Item>
    </section>
  );
}

export default App;
