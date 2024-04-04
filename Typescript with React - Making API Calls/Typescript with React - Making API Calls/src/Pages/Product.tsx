import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Post, fetchApi } from 'src/api/api';

 const Product:React.FC=()=> {
  const [data,setData]=useState<Post[]>([]);
  console.log(data);
  
  useEffect(()=>{
    const fetchData=async()=>{
      try {
  const res = await fetchApi();
  setData(res);
      } catch (error) {
        throw error;
      }
    }
fetchData();
  },[])
  return (
    <>
<Box>{data.map((el)=>(
  <Box key={el.id} border={"1px solid orangeRed"} m={5} p={6}>
  {/* <Text>{el.userId}</Text> */}
  <Text>{el.id}</Text>
  <Heading>{el.title}</Heading>
  <Text>{el.body}</Text>
  </Box>
))}</Box>
    </>
  )
}

export default Product;