import styled from "styled-components";

export const BigContainer = styled.div``

export const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
`

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #fbf7f7;
`

export const Button = styled.button`
    font-weight: 600;
    font-size: 12px;
    background: #ffffff;
    padding: 1px 2px;
    border-radius: 5px;
    color: black;
    border: none;
    cursor: pointer;
    width: 90px;
    height: 25px;
`

export const Input = styled.input`
    background: #252525;
    border: 1px solid #ffffff;
    color: #ffffff;
    border-radius: 5px;
    outline: none;
    display: block;
    width: 100%;
    padding: 5px;
    
    &:focus {
        border: 1px solid #4649ff;
    }
`