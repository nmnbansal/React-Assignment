import { Box, Button, Center, Flex, FormControl, FormLabel, Grid, Heading, Input, Text } from "@chakra-ui/react";
import { useReducer } from "react";

const formState = {
    name: "",
    establishment_year: "",
    address: {
        building: "",
        street: "",
        city: {
            name: "",
            locality: {
                pinCode: "",
                landmark: ""
            }
        },
        state: "",
        coordinates: { latitude: "", longitude: "" },
    },
    courses_offered: []
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_COLLEGE":
            return { ...state, name: payload };
        case "ADD_YEAR":
            return { ...state, establishment_year: payload };
        case "ADD_BUILDING":
            return { ...state, address: { ...state.address, building: payload } };
        case "ADD_STREET":
            return { ...state, address: { ...state.address, street: payload } };
        case "ADD_CITY":
            return { ...state, address: { ...state.address, city: { ...state.address.city, name: payload } } };
        case "ADD_PINCODE":
            return { ...state, address: { ...state.address, city: { ...state.address.city, locality: { ...state.address.city.locality, pinCode: payload } } } };
        case "ADD_LANDMARK":
            return { ...state, address: { ...state.address, city: { ...state.address.city, locality: { ...state.address.city.locality, landmark: payload } } } };
        case "ADD_STATE":
            return { ...state, address: { ...state.address, state: payload } };
        case "ADD_LATITUDE":
            return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, latitude: payload } } };
        case "ADD_LONGITUDE":
            return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, longitude: payload } } };
        case "ADD_COURSE":
            return { ...state, courses_offered: [...state.courses_offered, payload] };
        case "RESET":
            return formState;
        default:
            throw new Error("Something went wrong with action type");
    }
}

const CollegeForm = () => {
    const [state, dispatch] = useReducer(reducer, formState);
    const {
        name,
        establishment_year,
        address: {
            building,
            street,
            city: { name: cityName,
                locality: {
                    pinCode,
                    landmark
                }
            },
            state: addressState,
            coordinates: { latitude, longitude },
        },
        courses_offered: coursesOffered
    } = state;

const handleReset=()=>{
    dispatch({type:"RESET"})
}

    return (
        <>
        <Center>
                <Heading as="h3" size="lg" m={4}>
                    Masai School
                </Heading>
            </Center>

        <Box border="2px solid" m={2} p={10}>

                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    <FormControl>
                        <FormLabel>College Name :</FormLabel>
                        <Input placeholder="College Name" onChange={(e) => dispatch({ type: "ADD_COLLEGE", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Establishment Year:</FormLabel>
                        <Input placeholder="Establishment Year" onChange={(e) => dispatch({ type: "ADD_YEAR", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Building:</FormLabel>
                        <Input placeholder="Building" onChange={(e) => dispatch({ type: "ADD_BUILDING", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street:</FormLabel>
                        <Input placeholder="Street" onChange={(e) => dispatch({ type: "ADD_STREET", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>City Name:</FormLabel>
                        <Input placeholder="City Name" onChange={(e) => dispatch({ type: "ADD_CITY", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pincode:</FormLabel>
                        <Input placeholder="Pincode" onChange={(e) => dispatch({ type: "ADD_PINCODE", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Landmark:</FormLabel>
                        <Input placeholder="Landmark" onChange={(e) => dispatch({ type: "ADD_LANDMARK", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>State:</FormLabel>
                        <Input placeholder="State" onChange={(e) => dispatch({ type: "ADD_STATE", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Latitude:</FormLabel>
                        <Input placeholder="Latitude" onChange={(e) => dispatch({ type: "ADD_LATITUDE", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Longitude:</FormLabel>
                        <Input placeholder="Longitude" onChange={(e) => dispatch({ type: "ADD_LONGITUDE", payload: e.target.value })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Courses Offered:</FormLabel>
                        <Input placeholder="Course Name" onChange={(e) => dispatch({ type: "ADD_COURSE", payload: e.target.value })} />
                    </FormControl>
                </Grid>
                <Center>
                    <Button colorScheme="blue" m={2} onClick={handleReset}>Reset</Button>
                </Center>
                </Box>
            <br />
                <Grid templateColumns="repeat(1, 1fr)" gap={4} border="2px solid" p={10} m={2}>
                    <Text>CollegeName: {state.name}</Text>
                    <Text>Establishment_year: {state.establishment_year}</Text>
                    <Text>Building: {state.address.building}</Text>
                    <Text>Street: {state.address.street}</Text>
                    <Text>CityName: {cityName}</Text>
                    <Text>Pincode:{state.address.city.locality.pinCode}</Text>
                    <Text>LandMark: {state.address.city.locality.landmark}</Text>
                    <Text>State: {addressState}</Text>
                    <Text>Lattitute : {state.address.coordinates.latitude}</Text>
                    <Text>longitude : {state.address.coordinates.longitude}</Text>
                    <Text>Courses : {coursesOffered}</Text>
                </Grid>
        </>
    );
}

export default CollegeForm;