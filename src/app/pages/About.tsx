import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import test1 from '../../../public/img/test1.webp'

const About = () => {
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
          <Image
            src={test1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          お酒を造る人がいる。
          食材を育てる人がいる。
          そして、届けてくれる人がいる。
          ふるさとは「美味しい」のバトンを、
          お客様へと繋ぎます。
        </Grid>
        <Grid item xs={12} md={6}>
          ひとつの日本酒との出会いがきっかけでふるさとは生まれたと言ってもいいかもしれません。
          造り手の想いが込められた日本酒には、それだけの魅力が詰まっています。
          この魅力をより多くの人に伝えられるお店を目指し、
          全国各地の日本酒をご用意しております。
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={test1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default About