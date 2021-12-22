import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';


const Products = [
    { id: 1 , name: "shoes", description: "Running shoes" },
    { id:2, name: "mackbook", description: "Apple macbook"}
]

const Products = () =>{

      <main>
          <Grid container justify="center"  spacing={4} >
          {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        ))}
          </Grid>
      </main>
}

export default Products;