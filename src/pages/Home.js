import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Home;
