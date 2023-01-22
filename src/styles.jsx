import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 1rem;
    border-bottom: 1px solid #e6ebf4;


    @media (max-width: 640px) {
        padding: 1rem 2rem;
    }

`

export const Image = styled.img`
    width: 7rem;
    object-fit: contain;
`
