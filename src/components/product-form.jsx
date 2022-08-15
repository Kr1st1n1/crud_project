import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import ProductsService from 'services/products-service';

const ProductForm = ({
  onSubmit,
  formTitle,
  submitText,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [title, setTitle] = React.useState(initValues?.title ?? '');
  const [category, setCategory] = React.useState(initValues?.categoryId ?? '');
  const [price, setPrice] = React.useState(initValues?.price ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');
  const [description, setDescription] = React.useState(initValues?.description ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      categoryId: category,
      price: Number(price),
      img,
      description,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await ProductsService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  return (
    <Paper
      component="form"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 3,
        minWidth: 370,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" sx={{ textAlign: 'center', pb: 2 }}>{formTitle}</Typography>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column', gap: 2,
        }}
      >
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          select
          variant="filled"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map(({ id, title: categoryTitle }) => (
            <MenuItem key={id} value={id}>{categoryTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price €"
          type="number"
          fullWidth
          variant="filled"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          label="Image path"
          fullWidth
          variant="filled"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          variant="filled"
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            color="primary"
            size="large"
            sx={{ fontWeight: 700 }}
          >
            {submitText}

          </Button>
        </Box>
      </Box>

    </Paper>
  );
};

export default ProductForm;
