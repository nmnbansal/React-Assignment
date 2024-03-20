import { Box, Center, Heading, Text, Card, CardHeader, Image, Flex } from '@chakra-ui/react';

const Cards = () => {
    return (
        <>
            <Box bg="#edf2f6" p={4}>
                <Center>
                    <Heading size="lg">Our Clients Speak</Heading>
                </Center>
                <Center><Text fontWeight='500'>We have been working with clients around the world.</Text></Center>
                <br /><br />
                <Flex direction={{ base: "column", sm: "column", md: "column", lg: "row" }}>
                    <Box p={2} width={{ base: "100%", sm: "100%", md: "100%", lg: "33%" }}>
                        <Card>
                            <CardHeader>
                                <Center>
                                    <Heading fontSize={{ base: "20px", sm: "20px", md: "30px" }}>Efficient Collaboration</Heading>
                                </Center>
                            </CardHeader>
                            <Text textAlign='center' p={4} color='#6c6b6b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit amet, a eos iste veniam vitae tempora necessitatibus totam fugiat dolorem eius expedita quas nostrum facilis! Impedit ea culpa laboriosam!</Text>
                        </Card>
                        <Center mt={4}>
                            <Image src="https://randomuser.me/api/portraits/women/79.jpg" w="40px" h="40px" borderRadius="50%" />
                        </Center>
                        <Center>
                            <Heading fontSize="lg" mt={2}>Jane Cooper</Heading>
                        </Center>
                        <Center>
                            <Text fontSize="sm" color='#6c6b6b'>CEO At ABC Corporation</Text>
                        </Center>
                    </Box>
                    <Box p={2} width={{ base: "100%", sm: "100%", md: "100%", lg: "33%" }}>
                        <Card>
                            <CardHeader>
                                <Center>
                                    <Heading fontSize={{ base: "20px", sm: "20px", md: "30px" }}>Intuitive Design</Heading>
                                </Center>
                            </CardHeader>
                            <Text textAlign='center' p={4} color='#6c6b6b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit amet, a eos iste veniam vitae tempora necessitatibus totam fugiat dolorem eius expedita quas nostrum facilis! Impedit ea culpa laboriosam!</Text>
                        </Card>
                        <Center mt={4}>
                            <Image src="https://randomuser.me/api/portraits/women/79.jpg" w="40px" h="40px" borderRadius="50%" />
                        </Center>
                        <Center>
                            <Heading fontSize="lg" mt={2}>Jane Cooper</Heading>
                        </Center>
                        <Center>
                            <Text fontSize="sm" color='#6c6b6b'>CEO At ABC Corporation</Text>
                        </Center>
                    </Box>
                    <Box p={2} width={{ base: "100%", sm: "100%", md: "100%", lg: "33%" }}>
                        <Card>
                            <CardHeader>
                                <Center>
                                    <Heading fontSize={{ base: "20px", sm: "20px", md: "30px" }}>Mind Blowing Service</Heading>
                                </Center>
                            </CardHeader>
                            <Text textAlign='center' p={4} color='#6c6b6b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit amet, a eos iste veniam vitae tempora necessitatibus totam fugiat dolorem eius expedita quas nostrum facilis! Impedit ea culpa laboriosam!</Text>
                        </Card>
                        <Center mt={4}>
                            <Image src="https://randomuser.me/api/portraits/women/79.jpg" w="40px" h="40px" borderRadius="50%" />
                        </Center>
                        <Center>
                            <Heading fontSize="lg" mt={2}>Jane Cooper</Heading>
                        </Center>
                        <Center>
                            <Text fontSize="sm" color='#6c6b6b'>CEO At ABC Corporation</Text>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export { Cards };
