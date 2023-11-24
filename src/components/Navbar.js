import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'
import Close from '@mui/icons-material/Close'
import Header from './Header'
import Logo from './Image/logo for house.jpg'
import { motion } from 'framer-motion'



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Navbar() {
  const [visible, setVisible] = useState(false)

  const toggleMenu = () => {
    setVisible(!visible)
  }



  return (
    <div class='girls'>  
    <div class='flex justify-center pt-8 text-white'>
    <Stack class='flex justify-between w-[80%]'>
    <section>
    <Typography className='art'>Reno House</Typography>
    {visible && (
      <motion.section variants={container}
      initial="hidden"
      animate="visible"  class='fixed top-0 bg-black px-20 py-10 h-[80%]  w-[100%] left-[-10px] shadow-2xl lg:hidden'>
    
       <Stack direction={'column'} spacing={5}>
       <Stack class='flex justify-between border-b-2 pb-2'>
       <Typography className='art'>Reno House</Typography>
       <p onClick={toggleMenu}><Close /></p>
       </Stack>
       <motion.section class='flex justify-start flex-col gap-5 absolute mt-3 pt-2'>
     <motion.p variants={item}> <Button>Residencies</Button></motion.p>
     <motion.p variants={item}>  <Button>Our value</Button></motion.p>
     <motion.p variants={item}>  <Button>Location</Button></motion.p>
     <motion.p variants={item}>  <Button>Get Started</Button></motion.p>
     <motion.p variants={item}>  <Button variant='contained'>Contact</Button></motion.p>
      </motion.section>
      </Stack>  
      </motion.section>)}
      </section>

    <p onClick={toggleMenu} class='lg:hidden'><Menu /></p>
    

    <section class='hidden lg:block'>
    <Stack direction={'row'} spacing={5}>
    <Button>Residencies</Button>
    <Button>Our value</Button>
    <Button>Location</Button>
    <Button>Get Started</Button>
    <Button variant='contained'>Contact</Button>
    </Stack>
    </section>


   
    </Stack>   
    </div>
    <Header /> 
    </div>

  )
}

export default Navbar
