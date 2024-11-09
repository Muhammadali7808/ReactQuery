import { Typography } from '@mui/material'
import React from 'react'

export const Card = ({img,title,price,id}) => {
  return (
    <div>
        <img style={{width:"100%"}} src={img} alt="img" />
        <Typography variant='h4'>{title}</Typography>
        <Typography>{price}</Typography>
    </div>
  )
}
