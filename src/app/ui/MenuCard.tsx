import { Card, CardContent, CardHeader, CardMedia } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import test1 from '../../../public/img/test1.webp'

const MenuCard = () => {
  return (
    <Card sx={{maxWidth:350}}>
        <CardHeader title="CardHeader" />
        <CardMedia>
            <Image
                src={test1}
                width={300}
                height={300}
                alt="Picture of the author"
            />
        </CardMedia>
        <CardContent>
            これは一つのメニューです。
        </CardContent>
    </Card>
  )
}

export default MenuCard