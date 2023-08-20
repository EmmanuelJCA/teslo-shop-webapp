import { Grid, Typography } from '@mui/material';


export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={ 6 }>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>2 items</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>SubTotal:</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>${ `${ 275 }` }</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>Impuesto (15%):</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>${ `${ 41.25 }` }</Typography>
      </Grid>

      <Grid item xs={ 6 } sx={{ mt:2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={ 6 } sx={{ mt:2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>${ `${ 316.25 }` }</Typography>
      </Grid>
    </Grid>
  )
}
