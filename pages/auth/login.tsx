import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../../components/layouts';

const LoginPage = () => {
  return (
    <AuthLayout title='Ingresar'>
      <Box sx={{ width: 350, padding:'10px 20px' }}>
        <Grid container xs={ 12 } spacing={ 2 }>
          <Grid item>
            <Typography variant='h1' component='h1'>Iniciar sesión</Typography>
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label='Correo' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label='Contraseña' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={ 12 }>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Ingresar
            </Button>
          </Grid>

          <Grid item xs={ 12 } display='flex' justifyContent='end'>
            <NextLink href='/auth/register' passHref legacyBehavior>
              <Link underline='always'>
                ¿No tienes una cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage;
