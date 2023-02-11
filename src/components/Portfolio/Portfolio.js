import React, { useState } from 'react';
import Project from './project';
import Categories from './Categories';
import items from './data';
import './Portfolio.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
export default function Portfolio() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (


<main>
<section className="menu section">
  <div className="title">
    <h2>My Portfolio</h2>
    <div className="underline"></div>
  </div>
  <Categories categories={categories} filterItems={filterItems} />
  <Project items={menuItems} />
</section>
</main>
  )
}
