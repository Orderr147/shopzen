import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Megamenu = () => {
  return (
    <Box display={{ base: 'none', lg: 'flex' }} gap='5'>
      <Link to='/cart'>السله</Link>
      <Link to='/signup'>register</Link>
      <Link to='/login'>login</Link>
      <Link to='/myaccount'>الملف الشخصي </Link>
      <Link to='/product'>المنتجات </Link>
      <Link to='/adminlogin'>مسئول</Link>
    </Box>
  )
}

export default Megamenu
