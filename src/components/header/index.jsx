import {HeaderContanier, Button, Row, LogoImg, ButtonTwo} from './style'
import Logo from '../../img/logo-dio 1.png'



const Header =() => {
    return (
        <HeaderContanier>
            <LogoImg>
                <img src={Logo} alt='logo da dio'  />
            </LogoImg>
            
            <Row>
                <ButtonTwo>Home</ButtonTwo>
                <Button>ENTRAR</Button>
                <Button>CADASTRAR</Button>
            </Row>
        </HeaderContanier>
    )

}


export {Header}