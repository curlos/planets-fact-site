import React, { useState } from 'react';
import { Box, Flex, Grid, Image, Text, Link, Button } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import getData from '../utils/data';

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

const Planet = () => {

  const { name } = useParams()
  const planets = getData()
  const planet = planets.find((planet) => planet.name === name)
  const [type, setType] = useState('planet')

  console.log(name)
  console.log(planet)
  console.log(planet.images[type])

  return (
    <Box p="30px">
      <Grid templateColumns="2fr 1fr">
        {type !== 'geology' ? (
          <Flex justify="center" align="center" flexGrow="2">
            <Image src={planet.images[type].slice(1,)} height="336px" />
          </Flex>
        ) : (
          <Flex justify="center" align="center" flexGrow="2">
            <Image src={planet.images['planet'].slice(1,)} height="336px"/>
            <Image src={planet.images[type].slice(1,)} height="199px" mb="-330px" position="absolute"/>
          </Flex>
        )}
        <Flex flexDirection="column" gap="20px" flexGrow="1">
          <Text fontSize="80px">{planet.name}</Text>
          <Text fontFamily="Spartan" fontSize="14px">
            {planet.overview.content}
          </Text>
          <Text fontFamily="Spartan" fontSize="14px" color="#838391">
            Source: <Link href={planet.overview.content} textDecoration="underline" color="#FFFFFF">Wikipedia.org</Link>
          </Text>

          <Flex flexDirection="column" gap="20px">
            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" bgColor={type === 'planet' ? COLORS[planet.name] : '#070724'} border={'1px'} borderColor={type !== 'planet' ? '#838391' : 'transparent'} borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px" cursor="pointer" _hover={{ bgColor: '#38384F', borderColor: '#38384F' }} onClick={() => setType('planet')}>
              <Text>01</Text>
              <Text>OVERVIEW</Text>
            </Box>

            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" bgColor={type === 'internal' ? COLORS[planet.name] : '#070724'} border={'1px'} borderColor={type !== 'internal' ? '#838391' : 'transparent'} borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px" cursor="pointer" _hover={{ bgColor: '#38384F', borderColor: '#38384F' }} onClick={() => setType('internal')}>
              <Text>02</Text>
              <Text>INTERNAL STRUCTURE</Text>
            </Box>

            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" bgColor={type === 'geology' ? COLORS[planet.name] : '#070724'} border={'1px'} borderColor={type !== 'geology' ? '#838391' : 'transparent'} borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px" cursor="pointer" _hover={{ bgColor: '#38384F', borderColor: '#38384F' }} onClick={() => setType('geology')}>
              <Text>03</Text>
              <Text>SURFACE GEOLOGY</Text>
            </Box>

            
          </Flex>
        </Flex>
      </Grid>

      <Grid templateColumns="1fr 1fr 1fr 1fr" gridGap="20px" py="30px" px="70px" my="30px">
        <Box border="1px" borderColor="#838391" p="20px">
          <Text fontSize="11px" fontWeight="bold" fontFamily="Spartan" color="#838391">ROTATION TIME</Text>
          <Text fontSize="40px" fontWeight="medium">{planet.rotation}</Text>
        </Box>

        <Box border="1px" borderColor="#838391" p="20px">
          <Text fontSize="11px" fontWeight="bold" fontFamily="Spartan" color="#838391">ROTATION TIME</Text>
          <Text fontSize="40px" fontWeight="medium">{planet.rotation}</Text>
        </Box>

        <Box border="1px" borderColor="#838391" p="20px">
          <Text fontSize="11px" fontWeight="bold" fontFamily="Spartan" color="#838391">ROTATION TIME</Text>
          <Text fontSize="40px" fontWeight="medium">{planet.rotation}</Text>
        </Box>

        <Box border="1px" borderColor="#838391" p="20px">
          <Text fontSize="11px" fontWeight="bold" fontFamily="Spartan" color="#838391">ROTATION TIME</Text>
          <Text fontSize="40px" fontWeight="medium">{planet.rotation}</Text>
        </Box>
        
      </Grid>
    </Box>
  );
};

export default Planet;
