import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Image from './image';
import TypographyLimited from './typography-limited';

const ProductCard = ({
  title,
  img,
  description,
  category,
  price,
  onDelete,
}) => (
  <Card sx={{
    display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', p: 3,
  }}
  >
    <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
      <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
    </Box>

    <CardContent sx={{ p: 2, flexGrow: 1 }}>

      <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{category}</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="h6" component="div" color="primary.main">{`${price} €`}</Typography>
      </Box>
      <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
    </CardContent>
    <Button
      sx={{
        border: 1,
        color: 'white',
        bgcolor: 'error.main',
        display: 'flex',
        alignSelf: 'center',
        minWidth: 170,
        p: 0.8,
        '&:hover': {
          bgcolor: '#d32f2fbf',
        },
      }}
      size="small"
      onClick={onDelete}
    >
      <ClearIcon />
    </Button>
  </Card>
);

export default ProductCard;
