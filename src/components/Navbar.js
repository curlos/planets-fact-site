import React from 'react';
import { Box, Flex, Text, Image, textDecoration } from "@chakra-ui/react"
import getData from '../utils/data'
import { Link } from 'react-router-dom';

const COLORS = {
  'Mercury': '#419EBB',
  'Venus': '#EDA249',
  'Earth': '#6D2ED5',
  'Mars': '#D14C32',
  'Jupiter': '#D83A34',
  'Saturn': '#CD5120',
  'Uranus': '#1EC1A2',
  'Neptune': '#2D68F0'
}

const Navbar = () => {

  const planets = getData()

  console.log(planets)

  return (
    <Flex flexDirection={{md: 'column', lg: 'row'}} justify="space-between" align="center" gap={{ md: '20px' }} p="20px" borderBottom="1px" borderColor="#838391" position="sticky">
      <Link to="/">
        <Box fontSize="28px">THE PLANETS</Box>
      </Link>

      <Flex align="center" gap="14px" fontFamily="Spartan" fontWeight="700" fontSize="11px" lineHeight="25px" letterSpacing={"1px"} d={{ base: 'none', md: 'flex'}}>
        {planets.map((planet) => (
          <Link to={`/planet/${planet.name}`}>
            <Text cursor="pointer" borderBottom="1px" borderColor="transparent" _hover={{ color: COLORS[planet.name], borderColor: COLORS[planet.name] }}>{planet.name}</Text>
          </Link>
        ))}
      </Flex>

      <Image src="/assets/icon-hamburger.svg" d={{ md: 'none'}}/>
    </Flex>
  )
};

export default Navbar;
