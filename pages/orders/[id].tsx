import NextLink from 'next/link';
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';


const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 21123' pageDescription='Resumen de la orden'>

      <Typography variant='h1' component='h1'>Orden: 21123</Typography>

      {/* <Chip
        sx={{ my:2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={ <CreditCardOffOutlined /> }
      /> */}

      <Chip
        sx={{ my:2 }}
        label='Orden pagada'
        variant='outlined'
        color='success'
        icon={ <CreditScoreOutlined /> }
      /> 

      <Grid container>
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              
              <Typography>Emmanuel Cañate</Typography>
              <Typography>323 Algún lugar</Typography>
              <Typography>La Montañita</Typography>
              <Typography>Venezuela</Typography>
              <Typography>+58 22244144</Typography>

              <Divider sx={{ my:1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Resumen de orden</Typography>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt:3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my:2 }}
                  label='Orden pagada'
                  variant='outlined'
                  color='success'
                  icon={ <CreditScoreOutlined /> }
                /> 
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </ShopLayout>
  )
}

export default OrderPage;
