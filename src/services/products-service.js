const serverAddress = 'http://localhost:8000';

const formatProduct = ({
  id,
  title,
  description,
  price,
  img,
  category,
}) => ({
  id,
  title,
  description,
  price,
  img,
  category: category.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/products?_expand=category`);
  const products = await response.json();

  return products.map(formatProduct);
};

const create = async (productProps) => {
  const response = await fetch('http://localhost:8000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });

  const product = await response.json();

  return product;
};

const remove = async (id) => {
  await fetch(`http://localhost:8000/products/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const update = async (id, productProps) => {
  const response = await fetch(
    `http://localhost:8000/products/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productProps),
    },
  );
  const product = await response.json();

  return product;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const ProductsService = {
  fetchAll,
  create,
  remove,
  update,
  fetchCategories,
};

export default ProductsService;
