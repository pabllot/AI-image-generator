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
    justify-content: space-between;
    max-height: 94.5%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f5f5f5;
    margin: 8px;
    padding: 16px;
    border-radius: 6px;
`
export const Button = styled.button`
    outline: none;
    border: none;
    
    cursor: pointer;
`

export const DownloadImage = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`