import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react"
import getData from '../utils/data'

const Navbar = () => {

  const planets = getData()

  console.log(planets)

  return (
    <Flex justify="space-between" align="center" p="20px">
      <Box fontSize="28px">THE PLANETS</Box>

      <Flex align="center" gap="14px" fontFamily="Spartan" fontWeight="700" fontSize="11px" lineHeight="25px" letterSpacing={"1px"}>
        {planets.map((planet) => <Text cursor="pointer">{planet.name}</Text>)}
      </Flex>
    </Flex>
  )
};

export default Navbar;
