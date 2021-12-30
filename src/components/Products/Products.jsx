import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';


const products = [
    { id: 1 , name: "shoes", description: "Running shoes", price:"$5", image:"https://images.unsplash.com/photo-1581067675122-a07ed597f1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHB1bWElMjBzaG9lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id:2, name: "mackbook", description: "Apple macbook", price:"$10", image:"https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80"}
];

const Products = () =>{
return (
      <main>
          <Grid container justify="center"  spacing={4} >
          {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product  product={product} />
          </Grid>
        ))}
          </Grid>
      </main>
);
}

export default Products;