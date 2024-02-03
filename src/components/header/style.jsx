import styled from "styled-components";



export const HeaderContanier = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 47px;
    background-color: #151515;
`

export const LogoImg = styled.div`
    margin-left: 10px;
`

export const Button = styled.button `
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 22px;

    font-family: open sans;
    font-weight: 400;
    margin-right: 20px;
    padding: 10px 10px;

    border-radius: 22px;
    background: #565656;
    border-style: none;
    color: #ffffff;
    font-size: 12px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`
export const ButtonTwo = styled.div`
    font-family: open sans;
    font-size: 18px;
    background: transparent;
    border-style: none;
    color: #ffffff;
    
    &:hover{
        cursor: pointer;
        opacity: 0.6;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    gap: 15px;
    
`