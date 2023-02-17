import React from 'react'

import { download } from '../../assets'
import { downloadImage } from '../../utils'
import { Button, Container, DownloadImage, HoverContainer, Image, DeleteButton } from './styles'

const Card = ({ _id, name, prompt, photo }) => {

  const deletee = async () =>{   
        try {
          await fetch('https://server-ai-pi.vercel.app/api/v1/post/'+_id, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })} catch (err) {
            console.log(err.message)
          }
        }
  
  
  return (
    <Container>
      <Image
        src={photo}
        alt={prompt}
      />
      <HoverContainer>
        <p style={{fontWeight: '500'}}>{prompt}. By: {name}</p>
        <Button type="button" onClick={() => downloadImage(_id, photo)} >
          <DownloadImage src={download} alt="download" />
        </Button>
      </HoverContainer>
      <DeleteButton onClick={deletee}></DeleteButton>
    </Container>
  )
}

export default Card