import styled from "styled-components";




export const ButtonContanier = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 41px;
    height: 41px;
    border: 1px solid #E4105D;
    border-radius: 27px;
    margin-top: 40px;
    padding: 5px;
    margin-bottom: 20px;

    &:hover {
        filter: brightness(1.5);
        border: 2px solid #E4105D ;
        cursor: pointer;
    }
`


export const ButtonPink = styled.button `
    border-style: none;
    border-radius: 27px;
    width: 98%;
    height: 29px;
    background: #E4105D;

    color: #ffffff;
    font-family: open sans;
    font-size: 18px;
    font-weight: 400;
    position: relative;

    &:hover {
        filter: brightness(1.2);
        background: #E4105D;
        cursor: pointer;
    }


`