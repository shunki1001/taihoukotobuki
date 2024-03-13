import { Table, Container, Grid } from '@mui/material'
import React from 'react'

const Available = () => {
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
        <Table aria-label="basic table">
          <tbody>
            <tr>
              <td>営業時間</td>
              <td>159</td>
            </tr>
            <tr>
              <td>Ice cream sandwich</td>
              <td>237</td>
            </tr>
            <tr>
              <td>Eclair</td>
              <td>262</td>
            </tr>
            <tr>
              <td>Cupcake</td>
              <td>305</td>
            </tr>
            <tr>
              <td>Gingerbread</td>
              <td>356</td>
            </tr>
          </tbody>
        </Table>
        </Grid>
      </Grid>
    </Container>
    
  )
}

export default Available