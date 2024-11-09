import React from 'react'
import { Header } from '../../components/header'
import { useProductsList } from './service/query/useProductsList'
import { Card } from '../../components/card'
import { Button, Container, Grid2, Stack } from '@mui/material'
import { useInView } from 'react-intersection-observer'

export const Home = () => {
  
    const { data, isLoading ,fetchNextPage,hasNextPage} = useProductsList();
    const {ref,inView}= useInView()
    React.useEffect(() => {
        if(inView && hasNextPage){
            fetchNextPage()
        }
    },[inView])

    


    return (
        <div>

            <Header />
            <Container>
                <Grid2 spacing={"20px"} container>
                    {isLoading ? <h1>Loading...</h1> : <>
                        {data?.pages.map((page) => page.map((item)=> <Grid2 size={4} key={item.id} >
                            <Card {...item} />
                        </Grid2>))}
                    </>}
                </Grid2>
                {hasNextPage ? <h1 ref={ref}>Loading...</h1>: ""}
            </Container>
        </div>
    )
}
