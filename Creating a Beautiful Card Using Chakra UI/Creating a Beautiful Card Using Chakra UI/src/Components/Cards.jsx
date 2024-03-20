import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Cards = () => {
  return (
    <>
      <Box>
        <Center>
          <Card m='50px' boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
            <CardBody>
              <Center>
                <Image
                  src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/416318091_2324616061262901_4281790030766016018_n.jpg?ccb=11-4&oh=01_AdTSynoCggWXuvmwBx6mX38MZcLYUwI7RtKGMECKFy4RIQ&oe=66084EFE&_nc_sid=e6ed6c&_nc_cat=107"
                  borderRadius='50%' width="150px" height="150px"
                />
              </Center>
              <Stack mt='6' spacing='3'>
                <Center>
                  <Heading size='md'>Naman Bansal</Heading>
                </Center>
                <Center>
                  <Text textAlign="center" fontSize='2xl'>
                    Full Stack Web Developer ,MERN Developer <br />or <br /><span color='blue.600'>#tag</span> <br />me in your posts
                  </Text>
                </Center>
                <Center>
                  <Flex gap={8} >
                    <Text fontSize='xl' bg="#edf2f6" p="5px 15px">
                      #Coding
                    </Text>
                    <Text fontSize='xl' bg="#edf2f6" p="5px 15px">
                      #DSA
                    </Text>
                    <Text fontSize='xl' bg="#edf2f6" p="5px 15px">
                      #React
                    </Text>
                  </Flex>
                </Center>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <ButtonGroup spacing='10'>
                  <Button variant='solid' colorScheme='gray' color={"black"} >
                    Message
                  </Button>
                  <Button variant='solid' colorScheme='blue'>
                    Follow
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
        </Center>
      </Box>

    </>
  );
}

export { Cards }