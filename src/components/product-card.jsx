import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import Image from './image';
import TypographyLimited from './typography-limited';

const ProductCard = ({
  title,
  img,
  description,
  category,
  price,
  onDelete,
  onEdit,
}) => (
  <Card sx={{
    display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', border: 'none', boxShadow: 'none',
  }}
  >
    <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
      <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
    </Box>
    <Stack direction="row" paddingLeft="10px">
      <Chip
        label={`# ${category}`}
        sx={{
          backgroundColor: 'secondary.main',
          fontSize: 10,
          mt: 2,
          mb: 2,
          mr: 0.5,
        }}
      />
      <Chip
        label="#style"
        sx={{
          backgroundColor: 'secondary.main',
          fontSize: 10,
          mt: 2,
          mb: 2,
          mr: 0.5,
        }}
      />
      <Chip
        label="#fashion"
        sx={{
          backgroundColor: 'secondary.main',
          fontSize: 10,
          mt: 2,
          mb: 2,
        }}
      />

    </Stack>

    <CardContent sx={{ p: 2, flexGrow: 1 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pb: 2,
      }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="h6" component="div" color="black">{`${price} €`}</Typography>
      </Box>
      <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
    </CardContent>
    <Box sx={{ display: 'flex', pb: 2, pl: 2 }}>
      <Button
        sx={{
          color: '#2f4f4e',
          fontWeight: 900,
          fontSize: 34,
          '&:hover': {
            bgcolor: 'warning.main',
          },
        }}
        size="small"
        onClick={onDelete}
      >
        <ClearIcon sx={{
          fontSize: 28,
        }}
        />
      </Button>
      <Button
        sx={{
          color: '#2f4f4e',
          fontWeight: 900,
          '&:hover': {
            bgcolor: 'info.light',
          },
        }}
        size="small"
        onClick={onEdit}
      >
        <EditIcon
          sx={{
            fontSize: 28,
          }}
        />
      </Button>
    </Box>

  </Card>
);

export default ProductCard;
