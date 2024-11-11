import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useSearch } from '../service/useSearch';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  const { data, isLoading } = useSearch(""); 

  useEffect(() => {
    if (data && data.length > 0) {
      let foundProduct = null;

      for (let i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(id)) {
          foundProduct = data[i];
          break;
        }
      }

      setProduct(foundProduct);
    }
  }, [id, data]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.img} alt='alt' style={{ width: "300px" }} />
      <p>{product.description}</p>
      <strong>{product.price} sum</strong> 
    </div>
  );
};

export default ProductDetail;
