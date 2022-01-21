import React from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import getData from '../utils/data'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const planets = getData()

  console.log(planets)

  return (
    <Flex justify="space-between" align="center" p="20px" borderBottom="1px" borderColor="#838391" position="sticky">
      <Link to="/">
        <Box fontSize="28px">THE PLANETS</Box>
      </Link>

      <Flex align="center" gap="14px" fontFamily="Spartan" fontWeight="700" fontSize="11px" lineHeight="25px" letterSpacing={"1px"} bgColor={{ base: 'white', sm: 'pink', md: 'red', xl: 'blue'}} d={{ base: 'none', md: 'flex'}}>
        {planets.map((planet) => (
          <Link to={`/planet/${planet.name}`}>
            <Text cursor="pointer">{planet.name}</Text>
          </Link>
        ))}
      </Flex>

      <Image src="/assets/icon-hamburger.svg" d={{ md: 'none'}}/>
    </Flex>
  )
};

export default Navbar;
