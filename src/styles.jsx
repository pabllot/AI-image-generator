import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #231f20;
    padding: 1rem;
    border-bottom: 1px solid #464647b7;
    position: fixed;
    z-index: 999;


    @media (max-width: 640px) {
        padding: 1rem 2rem;
    }

`

export const Image = styled.img`
    width: 8rem;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  
`
export const Main = styled.main`
    padding: 1rem 2rem;
    width: 100%;
    background: #252525;
    min-height: calc(100vh - 73px);



     @media (max-width: 640px) {
        padding: 2rem;
    }

`