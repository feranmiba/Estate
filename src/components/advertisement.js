import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Showcase from './Showcase'

function Advertisement() {
  return (
    <div class='continue'>
      <div>
      <section class='flex justify-center py-6'>
      <div class='border px-14 py-6 rounded-xl text-center text-white'>
      <Typography variant='h5' fontWeight={700} marginBottom={2}>Do you want to grow your brand</Typography>
      <Button variant='contained'>Hire us</Button>
      </div>
      </section>
      </div>

      <Showcase />
    </div>
  )
}

export default Advertisement
