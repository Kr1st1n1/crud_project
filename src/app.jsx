import * as React from 'react';
import {
  Box, Grid, Modal, Container, Typography,
} from '@mui/material';
import ProductsService from 'services/products-service';
import { ProductCard, Header, ProductForm } from './components';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [productBeingEdited, setProductBeingEdited] = React.useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setProductBeingEdited(null);
  };

  const FetchAllProducts = async () => {
    const fetchedProducts = await ProductsService.fetchAll();
    setProducts(fetchedProducts);
  };

  const createProduct = async (productProps) => {
    await ProductsService.create(productProps);
    await FetchAllProducts();
    closeModal();
  };

  const editProduct = (id) => {
    const foundProduct = products.find((c) => c.id === id);
    setProductBeingEdited(foundProduct);
    setModalOpen(true);
  };

  const updateProduct = async (productProps) => {
    await ProductsService.update(productBeingEdited.id, productProps);
    await FetchAllProducts();
    closeModal();
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
      bgcolor: '#2f4f4e',
    }}
    >
      <Container sx={{
        bgcolor: '#f0f2f5',
      }}
      >
        <Header openModal={() => setModalOpen(true)} />
        <Modal
          sx={{ bgcolor: '#2f4f4e' }}
          open={modalOpen}
          onClose={closeModal}
        >
          <ProductForm
            onSubmit={productBeingEdited ? updateProduct : createProduct}
            formTitle={productBeingEdited ? 'Redaguojamas produktas' : 'Naujo produkto sukūrimas'}
            submitText={productBeingEdited ? 'Atnaujinti' : 'Sukurti'}
            initValues={productBeingEdited}
          />
        </Modal>
        <Typography sx={{ fontSize: 34, fontWeight: 800, textAlign: 'center' }}>
          FRONT-END
        </Typography>
        <Typography sx={{ fontSize: 34, fontWeight: 800, textAlign: 'center' }}>
          CRUD APPLICATIONS
        </Typography>

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
                onEdit={() => editProduct(id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
