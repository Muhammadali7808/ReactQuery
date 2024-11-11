import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

export const Card = ({ img, title, brand, rame, price, id }) => {
  return (
    <div style={{ border: "2px solid #c8c6c6", padding: "20px", width: '100%', borderRadius: '10px' }}>
      <img style={{ width: "100%" }} src={img} alt="img" />
      <Typography fontSize={'28px'} mb={'10px'} color='#080808' variant='h4' ml={'auto'}>{title}</Typography>
      <Stack  direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Rating defaultValue={5} name='read-only' readOnly size='medium'  />
        <Typography>{brand}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontSize={'22px'}>{price} sum</Typography>
        <Typography fontSize={'18px'}>{rame}</Typography>
      </Stack>
    </div>
  )
}
