import React from 'react'
import { Container, BigContainer, Label, Button, Input } from './styles'

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
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </BigContainer>
  )
}

export default FormField