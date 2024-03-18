import { Container, Grid, Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import store_front from '../../../public/img/DSC00133.jpg'
import kitchen from '../../../public/img/DSC00310.jpg'
import master from '../../../public/img/DSC00159.jpg'

const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Grid container>
      <Grid item xs={12} md={12} sx={{textAlign: "center", my:{xs: 8, sm:12}}}>
        <h2>寿が集まる店</h2>
      </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={store_front}
            layout='responsive'
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{px: "2em", py: '1em'}}>
          お酒を造る人がいる。
          食材を育てる人がいる。
          そして、届けてくれる人がいる。
          ふるさとは「美味しい」のバトンを、
          お客様へと繋ぎます。
        </Grid>
        <Grid item xs={12} md={6} sx={{px: "2em", py: '1em'}}>
          ひとつの日本酒との出会いがきっかけでふるさとは生まれたと言ってもいいかもしれません。
          造り手の想いが込められた日本酒には、それだけの魅力が詰まっています。
          この魅力をより多くの人に伝えられるお店を目指し、
          全国各地の日本酒をご用意しております。
        </Grid>
        <Grid item xs={12} md={6}>
        <Image
            src={kitchen}
            layout='responsive'
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default About