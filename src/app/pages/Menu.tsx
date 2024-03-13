import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import MenuCard from '../ui/MenuCard'

const Menu = () => {
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
        <Grid item xs={12} md={12} sx={{'text-align': 'center'}}>
          <Typography variant='h3'>
            お品書き
          </Typography>
          <Typography>
            店主が愛する日本酒とその酒蔵をご紹介します。
          </Typography>
          <Typography>
            お酒の特徴や造り手のことから出会いまで、
          </Typography>
          <Typography>
            愛するお酒に捧げるふるさとからのラブレターです。
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard />
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default Menu