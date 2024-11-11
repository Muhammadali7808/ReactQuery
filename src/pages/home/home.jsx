import React from 'react'
import { Header } from '../../components/header'
import { useProductsList } from './service/query/useProductsList'
import { Card } from '../../components/card'
import { Container, Grid2 } from '@mui/material'
import { useInView } from 'react-intersection-observer'

export const Home = () => {

    const { data, isLoading, fetchNextPage, hasNextPage } = useProductsList();
    const { ref, inView } = useInView()
    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])




    return (
        <div>
            <Header />
            <Container>
                <Grid2 spacing={"20px"} container>
                    {isLoading ? <h1>Loading...</h1> : <>
                        {data?.pages.map((page) => page.map((item) => <Grid2 size={4} key={item.id} >
                            <Card img={item.img} title={item.title} brand={item.brand} rame={item.rame}  price={item.price} key={item.id} />
                        </Grid2>))}
                    </>}
                </Grid2>
                {hasNextPage ? <h1 ref={ref}>Loading...</h1> : ""}
            </Container>
        </div>
    )
}
