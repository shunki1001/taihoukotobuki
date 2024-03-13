import React from 'react'
import { Container, Grid } from '@mui/material'

const Contact = () => {
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
          Contact
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact