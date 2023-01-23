import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 12px;
    position: relative;

`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
`

export const HoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 94.5%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #10131f;
    margin: 8px;
    padding: 16px;
    border-radius: 6px;
`
