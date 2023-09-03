import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ShopLayout } from '@/components/layouts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre Completo', width: 300, sortable: false },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Información de estado de la orden',
    width: 200,
    renderCell: (params) => {
      return (
        params.row.paid 
          ? <Chip label='Pagado' variant='outlined' color='success' />
          : <Chip label='No Pagado' variant='outlined' color='error' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'Ver Orden',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${ params.row.id }`} passHref legacyBehavior>
          <Link underline='always'>
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
];

const rows = [
  { id: 1, paid: true, fullname: 'John Doe' },
  { id: 2, paid: false, fullname: 'Melisa Flores' },
  { id: 3, paid: true, fullname: 'Emmanuel Cañate' },
  { id: 4, paid: true, fullname: 'John Doe' },
  { id: 5, paid: false, fullname: 'John Doe' },
  { id: 6, paid: true, fullname: 'John Doe' },
  { id: 7, paid: true, fullname: 'John Doe' },
];

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component='h1'>Historial de órdenes</Typography>

      <Grid container>
        <Grid item>
          <DataGrid 
            rows={ rows }
            columns={ columns }
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              },
            }}
            pageSizeOptions={[10, 15, 20]}
          />
        </Grid>
      </Grid>      
    </ShopLayout>
  )
}

export default HistoryPage;
