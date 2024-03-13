import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';

const Top = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          TOP VIEW 
        </Grid>
      </Grid>
    </Container>
  )
}

export default Top