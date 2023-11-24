import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import image1 from './Image/Black-Family-PNG-Picture.png'
import image2 from './Image/Black-Family-PNG-Free-Download2.png'
import End from './End'
import { motion } from 'framer-motion'

function Testimony() {
  const [image, setImage] = useState(0)

  const [imageArray, setImageArray] = useState([
    {
      author: 'Orimode Kunle',
      message: '...They are well organised, structured and trustworthy. They are distinct frome other real estates. Also the engineers are so proffesional....' ,
      image: image1 ,
      Country: 'Lagos, Nigeria'
    },
    {
      author: 'Austin Great ',
      message: '...They emphasis an exceptional level of proffesional duties and expertise. They are well organised, structured, trustworthy. Turning a listening ear to my prfernces and showing properties that aligned with it...' ,
      image: image2 ,
      Country: 'Portharcout, Nigeria'
    }
  ])


  useEffect(() => {
    const interval = setInterval(()=> {
      setImage((prevIndex) => (prevIndex + 1) % imageArray.length)
    },  8000)
    return () => clearInterval(interval);
  }, [imageArray.length])



  const currentObject = imageArray[image];



  return (
    <div className='testimony'>
      <Container>
     <section class='py-14 flex flex-wrap md:flex-nowrap  gap-28' >
      <div class='w-[180%] md:w-[100%]'>
      <Typography class='lg:text-3xl font-bold text-2xl'>What Our Customer Say about us</Typography>

      <Typography class=' mt-6 md:mt-10 text-lg'> At <b className='artica'>  Reno house</b> we take our customer feedbacks seriously and make sure to give our customers the comfort they really deserve.</Typography>
      
      <div class=' mt-20 md:mt-40'>
      <Stack spacing={4}>
      <Typography>{currentObject.message}</Typography>
      <Stack spacing={0}> 
      <Typography>{currentObject.author}</Typography>
      <Typography>{currentObject.Country}</Typography> 
      </Stack>
      </Stack>  
      </div>
      </div>

      <motion.div initial={{ opacity: 0, x:30}} whileInView={{opacity: 1, x: 0}} transition={{ duration: 2 }} class='w-full flex justify-center'>
      <img src={currentObject.image} alt='ee' class='rounded-xl w-[50%] md:w-[70%] xl:w-[90%]' />
      </motion.div>

      </section>
      <End />
      </Container>
    </div>
  )
}

export default Testimony
