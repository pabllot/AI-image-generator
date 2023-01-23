import React from 'react'

import { download } from '../../assets'
import { downloadImage } from '../../utils'
import { Container, HoverContainer, Image } from './styles'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <Container>
      <Image
        src={photo}
        alt={prompt}
      />
      <HoverContainer>
        <p>{prompt}</p>
      </HoverContainer>
    </Container>
  )
}

export default Card