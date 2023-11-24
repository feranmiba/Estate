import React, { useEffect, useState } from 'react'
import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3',
    headers: {
      'X-RapidAPI-Key': '002fa5b957msh1cfd86db51f15d9p1be840jsn68c6e885b81a',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

function util() {
    const [time, timesone] = useState()
useEffect(() => {
     axios.request(options).then(function (response) {
        console.log(response.data);  
     }).catch(function (error) {
        console.error(error)
     })

    })
  return (
    <div>
      
    </div>
  )
}

export default util
