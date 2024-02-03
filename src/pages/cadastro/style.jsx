import styled from "styled-components";



export const Contanier = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`




export const TextLeft = styled.div`
    width: 388px;
    height: 308px;
    margin-top: 100px;
    
` 

export const Text = styled.h2`
    font-family: open sans-serif;
    font-size: 38px;
    font-weight: 700;
    color: #ffffff;
`




export const InputContanier = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 374px;
    height: 153px;
`

export const TextRight = styled.h2`
    font-size: 32px;
    font-weight: 700;
    font-family: open sans;
    color: #ffffff;
`

export const SubTitle = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    font-family: open sans;
    margin-top: 5px;
    margin-bottom: 10px;
`

export const TextLogin = styled.button`
    
    font-size: 16px;
    font-weight: 700;
    font-family: open sans;
    color: #23DD7A;
    background: transparent;
    border: none;
    
    &:hover{
        cursor: pointer;
        filter: brightness(1.5);
    }
`