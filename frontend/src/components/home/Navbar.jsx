import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import shopzen from '../../utils/Images/shopzen.jpeg'
import Megamenu from './Megamenu'
import PageLinkLogos from './PageLinkLogos'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import Sidebar from './Sidebar'
const Navbar = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      py='0.4rem'
      px='2rem'
      pos={'sticky'}
      top='0'
      width='full'
      bg='white'
      zIndex={'1000'}
      boxShadow='rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
      height={'4.5rem'}
    >
      <Link to='/'>
        <Box>
          <Image src={shopzen} width='13rem' />
        </Box>
      </Link>

      <Megamenu />
      <Button
        onClick={() => {
          localStorage.setItem('user_token', '')
          navigate('/login')
        }}
      >
        logout
      </Button>
      <Search show={show} />

      <PageLinkLogos setShow={setShow} />
    </Flex>
  )
}

export default Navbar
