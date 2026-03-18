import React from 'react';

function ProductCard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src="https://via.placeholder.com/150" alt="product" />
      <h4>Product Name</h4>
      <p>$20</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
