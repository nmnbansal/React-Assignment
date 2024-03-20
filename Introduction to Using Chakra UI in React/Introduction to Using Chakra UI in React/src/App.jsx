
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'

import './App.css'

function App() {


  return (
    <>
      <Box border='50px solid'>
        <Heading color={'white'}>
          <Center>
            Chakra UI
          </Center>
        </Heading>
        <Center>
          <Stack direction='row' spacing={8} m={10}>
            <Button colorScheme='teal' variant='solid'>
              Email
            </Button>
            <Button colorScheme='teal' variant='outline'>
              Call us
            </Button>
          </Stack>
        </Center>
        <Center>
        <Input placeholder='Basic usage' />
        </Center>
        <Center>
          
        <Card maxW='sm' m={8}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Center>
      </Box>
    </>
  )
}

export default App
