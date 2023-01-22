import React from 'react'
import { Container, BigContainer, Label, Button } from './styles'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <BigContainer>
      <Container>
        <Label htmlFor={name}>
          {labelName}
        </Label>
        {isSurpriseMe && (
          <Button
            type='button'
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </Button>
        )}
      </Container>
    </BigContainer>
  )
}

export default FormField