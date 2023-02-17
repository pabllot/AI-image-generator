import React from 'react'

import { download } from '../../assets'
import { downloadImage } from '../../utils'
import { Button, Container, DownloadImage, HoverContainer, Image } from './styles'

const Card = ({ _id, name, prompt, photo }) => {
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
    </Container>
  )
}

export default Card