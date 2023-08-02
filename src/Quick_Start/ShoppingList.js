import React from 'react';

const products = [
    { title : 'Apple', isFruit : true, id : 1 },
    { title : 'Banana', isFruit : true, id : 2 },
    { title : 'Cabbage', isFruit : true, id : 3 },
    { title : 'Dragon Fruit', isFruit : false, id : 4 },
    { title : 'Edward Mango', isFruit : false, id : 5 },
]

export default function ShoppingList() {
    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{ color : product.isFruit ? 'magenta' : 'darkgreen' }}
        >
            {product.title}
        </li>
        );

  return (
    <ul>{listItems}</ul>
  );
}
