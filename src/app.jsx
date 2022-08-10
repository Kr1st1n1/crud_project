import * as React from 'react';
import {
  Box, Grid, Modal, Container,
} from '@mui/material';
import ProductsService from 'services/products-service';
import { ProductCard, Header, ProductForm } from './components';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const FetchAllProducts = async () => {
    const fetchedProducts = await ProductsService.fetchAll();
    setProducts(fetchedProducts);
  };

  const createProduct = async (productProps) => {
    await ProductsService.create(productProps);
    await FetchAllProducts();
    setModalOpen(false);
  };

  const removeProduct = async (id) => {
    await ProductsService.remove(id);
    FetchAllProducts();
  };

  React.useEffect(() => {
    FetchAllProducts();
  }, []);

  return (
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
      pt: 2,
      px: 2,
    }}
    >
      <Container>
        <Header openModal={() => setModalOpen(true)} />
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <ProductForm onSubmit={createProduct} />
        </Modal>

        <Grid container spacing={2}>
          {products.map(({
            id,
            title,
            description,
            category,
            price,
            img,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <ProductCard
                title={title}
                description={description}
                img={img}
                category={category}
                price={price}
                onDelete={() => removeProduct(id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
