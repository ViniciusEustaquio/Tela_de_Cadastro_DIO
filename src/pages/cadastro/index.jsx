import {
  Contanier,
  TextLeft,
  InputContanier,
  Text,
  TextRight,
  SubTitle,
  TextLogin
} from "./style";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form"
import { Input } from "../../components/input";
import { Button } from "../../components/button/Index"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Cadastro = () => {
  
    const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.number().min(8, 'no minimo 8 caracteres').required(),
    })
    .required()



  const {
    control,
    handleSubmit,
    watch,
    formState: { },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  const onSubmit =  (data) => console.log(data)



  return (
    <Contanier>
      <TextLeft>
        <Text>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Text>
      </TextLeft>

      <InputContanier>
        <TextRight>Comece agora grátis</TextRight>
        <SubTitle>Crie sua conta e make the change._</SubTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          placeholder="Nome completo"
          name="nome"
          type="text"
          Lefticon={<FaUserAlt />}
        />
        <Input
          control={control}
          placeholder="E-mail"
          name="email"
          type="email"
          Lefticon={<MdEmail />}
        />
        <Input
          control={control}
          placeholder="Senha"
          name="password"
          type="password"
          Lefticon={<MdLock />}
        />
      <Button name="Criar minha conta" type="submit" />
       </form>

      <SubTitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitle>
      <SubTitle><strong>Já tenho conta.</strong> <TextLogin> Fazer login</TextLogin></SubTitle>
      </InputContanier>
      

    </Contanier>
  );
};

export { Cadastro };
