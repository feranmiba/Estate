import React from 'react'
import Pic1 from './Image/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import House from '@mui/icons-material/House'
import Short from './Image/short.jpg'
import Rent from './Image/sidekix-media-WgkA3CSFrjc-unsplash.jpg'
import DesignServices from '@mui/icons-material/DesignServices'
import Roofing from '@mui/icons-material/Roofing'
import Testimony from './Testimony'
import { motion } from 'framer-motion'



function Showcase() {
  return (
    <div>
    <Container>


    <section class='flex flex-wrap lg:flex-nowrap  justify-between gap-10 py-14'>
    <motion.div initial={{ opacity: 0, scale:0.5 }}  whileInView={{ opacity: 1, scale: 1, transitionDuration: 0.5 }} class='w-[100%]'> <img src={Pic1} alt='' class=' rounded-xl shadow-2xl' /> </motion.div>
    <motion.div initial={{ x: -100, opacity:0 }} whileInView={{ opacity: 1, x: 0, scale: 1}} transition={{duration: 0.5}} class='text-center text-black py-14 w-[100%]'>
    <House />
    <Typography variant='h4' marginBottom={2}>Strong and engineered Home</Typography>
    <Typography>At Reno houses you can be rest assured of your safety. The houses we sell are well organised and structured for living. We have agood Foundation strong enough for any natural diasater. Talking about the important aspect is the High quality material used by qualifieds architecturals and engineers in building the houses. </Typography>
    </motion.div>
    </section>


    <section class='flex flex-wrap-reverse lg:flex-nowrap justify-between gap-10 py-16'>
    <Box class='text-center text-black py-14'>
    <Roofing />
    <Typography variant='h4' marginBottom={2}>Great Structure and nice compound </Typography>
    <Typography>100% secure. Having a great structure and nice environment can make a world of difference in the building and that's what makes us at Feranmi House stands out among every other estate.</Typography>
    </Box>
    <motion.div initial={{ opacity: 0, scale:0.5 }}  whileInView={{ opacity: 1, scale: 1}} transition={{duration: 0.5}} class='w-[100%]'> <img src={Short} alt='' class=' rounded-xl shadow-2xl' /> </motion.div>
    </section>

    <section class='flex flex-wrap lg:flex-nowrap justify-between gap-10 py-16'>

    <motion.div initial={{ opacity: 0, scale:0.5 }}  whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 0.5}}  class='w-[100%]'> 
    <img src={Rent} alt='' class='rounded-xl shadow-2xl  border-t-black' /> 
    </motion.div>

    <motion.div initial={{ x: -100, opacity:0 }} whileInView={{ opacity: 1, x: 0, scale: 1}} transition={{duration: 0.5}} class='text-center text-black mt-14'>
    <DesignServices />
    <Typography variant='h4' marginBottom={2}>Beautiful Interior Design </Typography>
    <Typography>Creating beautiful interiors involves the artful arrangement of elements within a space to achieve aesthetic harmony, functionality, and a sense of cohesion.</Typography>
    </motion.div>
    </section>
    </Container>
    <Testimony />
    </div>
  )
}

export default Showcase
