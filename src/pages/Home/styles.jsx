import styled from "styled-components";

export const Section = styled.section`
    max-width: 80rem;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export const H1 = styled.h1`
    font-weight: 700;
    color: #ffffff;
    font-size: 32px;
`


export const FormContainer = styled.div`
    margin-top: 1rem;
`

export const LoaderContainer = styled.div`
    margin-top: 3rem;
` 

export const LoaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
export const H2 = styled.h2`
    font-weight: 500;
    color: #c4cbd2;
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
`

export const Span = styled.span`
font-size: 1.2rem;
color: #ffffff;
`

export const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.2rem;
        
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        

`

export const Title = styled.h2`
    margin-top: 1rem;
    font-weight: 700;
    color: #6449ff;
    text-transform: uppercase;
    font-size: 1rem;

`