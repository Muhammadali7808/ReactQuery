import { Stack, TextField } from '@mui/material'
import React from 'react'
import { useDebounce } from '../hooks/useDebounce';
import { useSearch } from '../service/useSearch';

export const Header = () => {
  const [input, setinput] = React.useState("");
  const debounceValue = useDebounce(input);
  const { data, isLoading } = useSearch(debounceValue)



  return (
    <Stack p={"30px"} position={"relative"}>
      <TextField value={input} onChange={(e) => setinput(e.target.value)} />
      {!isLoading && <Stack boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
        {data.map((item)=> <Stack direction={"row"} alignItems={"center"} p="20px" border={"1px solid grey"}  key={item.id}>
          <img style={{width:"150px"}} src={item.img}/>
          <h3>{item.title}</h3>
        </Stack>)}
      </Stack>}

    </Stack>
  )
}
