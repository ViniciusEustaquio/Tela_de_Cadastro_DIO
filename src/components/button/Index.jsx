import {ButtonContanier, ButtonPink} from './style'



const Button = ({name, type}) => {
    return (
        <ButtonContanier>
            <ButtonPink type={type}>{name}</ButtonPink>
        </ButtonContanier>
    )
}


export {Button}