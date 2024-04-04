import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  console.log(time);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <>
    <Center>
    <Box border={"2px solid orangeRed"} p={10} m={10}>
    <Center>
      <Text>{time}</Text></Center>
      <Center>
      <Flex gap={10}>
        <Button bg={"teal"} p={4} borderRadius={3} size="md" onClick={handleStart} border={"none"} color={"white"}>
          Start
        </Button>
        <Button bg={"red"} p={4} borderRadius={3} size="md" onClick={handleStop} border={"none"} color={"white"}>
          Stop
        </Button>
        <Button bg={"green"} p={4} borderRadius={3} size="md" onClick={handleReset} border={"none"} color={"white"}>
          Reset
        </Button>
      </Flex>
      </Center>
      </Box>
      </Center>
    </>
  );
};

export default Timer;
