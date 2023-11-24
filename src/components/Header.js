import React, { useEffect, useState } from 'react'
import pic from './Image/krzysztof-hepner-978RAXoXnH4-unsplash (1).jpg'
import pic2 from './Image/sacha-t-sas-uHahR9MnVfw-unsplash.jpg'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import LocationSearching from '@mui/icons-material/LocationSearching'
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'






function Header() {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const Interval = setInterval(() => {
      setImage((prevIndex) => (prevIndex + 1) % imageArray.length )
    }, 10000);

    return() => clearInterval(Interval)
  }, [])

  const imageArray =[
    pic,
    pic2
  ]

  const CurrentImage = imageArray[image]

  const animation = {
    initial: {opacity: 0, y: 200, x:30},
    animate: {opacity: 1, x: 0, y: 5}, 
  }



  return (
    <div>

    <div class='flex justify-center px-8 sm:px-20 md:px-14 xl:px-40 mt-14'>
      <section class='flex  justify-between flex-wrap-reverse md:flex-nowrap'>


      <motion.div  variants={animation} initial="initial" animate="animate" transition={{duration: 2}} class='mt-5 md:mt-20 lg:mt-28 md:w-[80%] lg:w-[90%]'>
      <Typography class='mb-3 md:mb-8 text-4xl  xl:text-5xl mt-5 font-bold'> Discover Most Suitable Property</Typography>
      <Typography class='text-sm'>Find a variety of beautiful, elegant, tech oriented, sustaianable and affordable house for a special person like you.  </Typography>
      <section class='flex justify-between px-2 mt-4 md:mt-14 bg-white rounded-xl w-[90%]  mb-6'>
      <div>
      <IconButton>
      <LocationSearching />
      </IconButton>
      <InputBase  sx={{ ml: 1, padding: "10px 0px" }}
      placeholder="Search a Location"/>
      </div>
      <div>
      <Button variant='contained' sx={{marginTop: '10px'}}>Search</Button>
      </div>
      </section>

      <Stack direction={'row'} spacing={6}>
      <Stack direction={'column'} spacing={1}>
      <Typography class=' text-lg xl:text-2xl'>9, 000 +</Typography>
      <Typography class=' text-xs'>Premuim product</Typography>
      </Stack>
      <Stack direction={'column'} spacing={1} marginTop={1}>
      <Typography class=' text-lg xl:text-2xl'>9, 000 +</Typography>
      <Typography class=' text-xs'>Premuim product</Typography>
      </Stack>
      <Stack direction={'column'} spacing={1} marginTop={1}>
      <Typography class=' text-lg xl:text-2xl'>9, 000 +</Typography>
      <Typography class=' text-xs'>Premuim product</Typography>
      </Stack>
      </Stack>
      </motion.div>  
      
      
      <div class='md:w-[80%]'>
       <img  src={CurrentImage}  class='md:w-[90%] md:h-[90%]  xl:w-[100%] lg:h-[80%]   rounded-t-full border-t-black' alt='img hosus'/>
      </div> 
      </section>
      </div>
      </div>
  
  )
}

export default Header
