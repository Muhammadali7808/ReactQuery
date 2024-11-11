import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useDebounce } from '../hooks/useDebounce';
import { useSearch } from '../service/useSearch';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [input, setinput] = React.useState("");
  const debounceValue = useDebounce(input);

  const { data, isLoading } = useSearch(debounceValue);
  const navigate = useNavigate();

  const handleShow = (id) => {
    navigate(`/product/${id}`);
  };


  return (
    <>
      <Stack p={"30px"} position={"relative"}>
        <TextField value={input} onChange={(e) => setinput(e.target.value)} />
        {!isLoading && <Stack boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
          {data.map((item) => <Stack direction={"row"} alignItems={"center"} p="20px" border={"1px solid #c8c6c6"} gap={'20px'} borderRadius={'10px'} marginTop={'10px'} key={item.id}>
            <img style={{ width: "150px" }} src={item.img} />
            <div>
              <h3>{item.title}</h3>
              <strong style={{ color: '#01842d', fontSize: '16px', marginTop: '12px' }}>{item.price} sum</strong>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleShow(item.id)} 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              SHOW
            </Button>
          </Stack>)}
        </Stack>}
      </Stack>
    </>

  )
}
