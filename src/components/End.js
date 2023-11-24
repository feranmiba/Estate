import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import Copyright from '@mui/icons-material/Copyright'
import Applestore from './Image/app-store-png-logo-33115.png'

function End() {
  return (
    <div>
    <section class='flex flex-wrap-reverse md:flex-nowrap  justify-between mt-10 py-10 border-b-2'>
    <div class='mt-10 md:mt-0'>
    <Typography><b className='artica'>Follow us</b>  and download our apps </Typography>
    <Stack direction={'row'} spacing={3} marginTop={2}>
    <FaFacebook class=' text-3xl'/> <FaInstagram class=' text-3xl'/> <FaTwitter class=' text-3xl'/> <FaLinkedin class=' text-3xl'/>
    </Stack>
    <Stack direction={'row'} spacing={2} marginTop={2}>
    <img src={Applestore} alt=''  class='w-[40%]'/>
    </Stack>
    </div>


    <div class='w-[150%] md:w-[190%]'>
    <Typography fontSize={22}> Want to receive information about our new <b className='artica'>Exclusive</b> </Typography>
    <Typography marginTop={1}>Sign up for NewsLetters</Typography>
   
    <InputBase  sx={{ ml: 1, mt: 1, padding: "10px 15px", border: '0.2mm solid white', borderTopLeftRadius: '3mm', borderBottomLeftRadius: '3mm', color: 'white' }}
    placeholder="Your email"/>
    <button className='sign'>Sign up</button>
    
    </div>
    </section>

    <section class='flex justify-between py-10'>
    <div>
    <Typography class=' text-sm md:text-lg'>Reno Houses</Typography>
    </div>

    <Stack direction={'row'} spacing={3}>
    <Typography class=' text-sm md:text-lg'> Privacy policy</Typography>
    <Typography class=' text-sm md:text-lg'>Reno group inc</Typography>
    <Typography class=' text-sm md:text-lg'>Terms of service </Typography>
    </Stack>
    </section>

    <section class='text-center'>
    <Copyright />Copyright Feranmi House
    </section>
    </div>
  )
}

export default End
   