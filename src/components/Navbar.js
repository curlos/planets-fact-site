import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react"
import getData from '../utils/data'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const planets = getData()

  console.log(planets)

  return (
    <Flex justify="space-between" align="center" p="20px" borderBottom="1px" borderColor="#838391">
      <Box fontSize="28px">THE PLANETS</Box>

      <Flex align="center" gap="14px" fontFamily="Spartan" fontWeight="700" fontSize="11px" lineHeight="25px" letterSpacing={"1px"}>
        {planets.map((planet) => (
          <Link to={`/planet/${planet.name}`}>
            <Text cursor="pointer">{planet.name}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  )
};

export default Navbar;
