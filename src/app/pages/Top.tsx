import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import Image from 'next/image'
import top_view from '../../../public/img/DSC00167.jpg'

const Top = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: { xs: 8, sm: 12 },
      }}
    >
        <Box sx={{position: 'relative', display: 'block', width: '100vw', height: '66vw'}}>
        <Image
            src={top_view}
            fill
            objectFit='contain'
            alt="top view"
          />
        </Box>
    </Container>
  )
}

export default Top