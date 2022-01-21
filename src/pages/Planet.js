import React, { useState } from 'react';
import { Box, Flex, Grid, Image, Text, Link, Button } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import getData from '../utils/data';

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
        <Flex justify="center" align="center" flexGrow="2">
          <Image src={planet.images[type].slice(1,)} />
        </Flex>
        <Flex flexDirection="column" gap="20px" flexGrow="1">
          <Text fontSize="80px">{planet.name}</Text>
          <Text fontFamily="Spartan" fontSize="14px">
            {planet.overview.content}
          </Text>
          <Text fontFamily="Spartan" fontSize="14px" color="#838391">
            Source: <Link href={planet.overview.content} textDecoration="underline" color="#FFFFFF">Wikipedia.org</Link>
          </Text>

          <Flex flexDirection="column" gap="20px">
            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" bgColor={"#FF6A44"} borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px">
              <Text>01</Text>
              <Text>OVERVIEW</Text>
            </Box>

            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" bgColor={"#FF6A44"} borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px">
              <Text>01</Text>
              <Text>INTERNAL STRUCTURE</Text>
            </Box>

            <Box d="flex" gap="25px" p="20px" px="25px" m="0px" border="1px" borderColor="#838391" borderRadius="0px" fontFamily="Spartan" fontSize="12px" fontWeight="bold" letterSpacing="2px">
              <Text>01</Text>
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
