import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import Button from '../components/ui-kits/Button/Button';
import withApollo from '../utils/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCTS } from '../graphql/product/product.query';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const HomeContainer = styled.div``

function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: "Samsung"
      }
    }
  });
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  
  const products = data?.getAllProduct?.data
  if(!products || !products.length) {
    return <p>Not found</p>
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeContainer>
        <Button>Get products</Button>
        {products.map((data) => (
            <ul key={data.id}>
                <li>{data.name}</li>
            </ul>
        ))}
      </HomeContainer>
      <Footer />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home)