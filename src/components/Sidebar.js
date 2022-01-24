import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Flex,
  Grid,
  Image, 
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent
} from "@chakra-ui/react"
import Navbar from './Navbar'
import getData from '../utils/data'

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

const Sidebar = ({ btnRef, isOpen, onOpen, onClose }) => {

  const planets = getData()

  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent bgColor="#070724" color="#FFFFFF">
        <Navbar btnRef={btnRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose} modal={true} />

        <DrawerBody height="100%" py="20px">
          <Grid templateRows="repeat(8, 1fr)" height="100%">
            {planets.map((planet) => (
              <Link to={`/planet/${planet.name}`} ref={btnRef} onClick={onClose}>
                <Flex justify="space-between" align="center" borderBottom="1px" borderColor="#979797" py="20px" h="100%">
                  <Flex align="center" gap="10px">
                    <Box height="20px" width="20px" bgColor={COLORS[planet.name]} borderRadius="50%"></Box>
                    <Box fontFamily="Spartan" textTransform="uppercase" fontWeight="bold">{planet.name}</Box>
                  </Flex>

                  <Image src="/assets/icon-chevron.svg" />
                </Flex>
              </Link>
            ))}
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
