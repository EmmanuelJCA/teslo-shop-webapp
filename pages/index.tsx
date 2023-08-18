import { Typography } from '@mui/material';

import { initialData } from '../database/products';
import { IProduct } from '../interfaces';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';

export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Los mejores productos de teslo aqui'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} component='h1'>Todos los productos</Typography>

      <ProductList 
        products={ initialData.products as IProduct[] }      
      />
    </ShopLayout>
  )
}
