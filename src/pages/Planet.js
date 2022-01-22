import React, { useState, useEffect } from 'react';
import { Box, Flex, Grid, Image, Text, Link, VStack } from "@chakra-ui/react"
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
  const planetStats = {
    'ROTATION TIME': planet.rotation,
    'REVOLUTION TIME': planet.revolution,
    'RADIUS': planet.radius,
    'AVERAGE TEMP.': planet.temperature
  }
  const [type, setType] = useState('planet')

  useEffect(() => {
    window.scrollTo(0,0)
  }, [name])

  console.log(name)
  console.log(planet)
  console.log(planet.images[type])

  return (
    <Box p="30px">
      <Grid templateColumns={{ base: 'none', lg: '2fr 1fr' }} templateRows={{ md: '2fr 1fr', lg: 'none'}}>
        {type !== 'geology' ? (
          <Flex justify="center" align="center" flexGrow="2">
            <Image src={planet.images[type].slice(1,)} height={{ base: '200px', md: '336px'}} mb={{ base: '20px', md: '0px' }}/>
          </Flex>
        ) : (
          <Flex justify="center" align="center" flexGrow="2">
            <Image src={planet.images['planet'].slice(1,)} height="336px"/>
            <Image src={planet.images[type].slice(1,)} height="199px" mb="-330px" position="absolute"/>
          </Flex>
        )}
        <Flex flexDirection={{base: 'row', lg: 'column'}} gap="20px" d={{ base: 'block', md: 'flex'}}>
          <VStack spacing={{ base: '20px' }} align={{ md: 'start' }} mb={{ base: '20px', md: '0px', 'lg': '20px' }} width={{ md: '55%', lg: 'auto' }} mr={{ md: '30px', lg: '0px' }}>
            <Text fontSize="80px" textAlign={{ base: 'center', md: 'start'}}>{planet.name}</Text>
            <Text fontFamily="Spartan" fontSize="14px" textAlign={{ base: 'center', md: 'start'}}>
              {planet.overview.content}
            </Text>
            <Text fontFamily="Spartan" fontSize="14px" color="#838391" textAlign={{ base: 'center', md: 'start'}}>
              Source: <Link href={planet.overview.content} textDecoration="underline" color="#FFFFFF">Wikipedia.org</Link>
            </Text>
          </VStack>

          <Flex flexDirection="column" justify="center" gap="20px" width={{ md: '45%', lg: 'auto' }}>
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

      <Grid templateColumns="1fr 1fr 1fr 1fr" gridGap="20px" py="30px" px={{ lg: '70px'}} my="30px" d={{ base: 'block', md: 'grid'}}>
        {Object.keys(planetStats).map((statName) => (
          <Flex d={{ base: 'flex', md: 'block'}} justify="space-between" align="center" width="100%" border="1px" borderColor="#838391" p="20px" mb={{ base: '15px', md: '0px'}}>
            <Text fontSize={{ base: '8px', xl: '11px'}}  fontWeight="bold" fontFamily="Spartan" color="#838391">{statName}</Text>
            <Text fontSize={{ base: '20px', md: '24px', xl: '40px'}} fontWeight="medium">{planetStats[statName]}</Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Planet;