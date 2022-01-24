import React from 'react';
import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react';
import getData from '../utils/data';
import { useNavigate } from 'react-router';

const Home = () => {
  const planets = getData()
  const navigate = useNavigate()
  
  return (
    <Box p="30px">
      <Flex justify="center" align="center" flexWrap="wrap" gap="40px">
        {planets.map((planet) => (
          <Flex flexDirection={'column'} justify="center" align="center" gap="15px" cursor="pointer" onClick={() => navigate(`/planet/${planet.name}`)}>
            <Image src={planet.images['planet'].slice(1,)} height="200px" />
            <Text fontSize={{ base: '20px', xl: '30px' }} _hover={{ textDecoration: 'underline' }}>{planet.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
};

export default Home;
