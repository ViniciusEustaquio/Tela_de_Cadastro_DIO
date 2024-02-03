import { InputContain, InputCadastro, IconContanier } from "./style";
import { Controller } from "react-hook-form";

const Input = ({ placeholder, control, name, type, Lefticon }) => {
  return (
    <InputContain>
      {Lefticon ? <IconContanier>{Lefticon}</IconContanier> : null}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) =>  <InputCadastro
        placeholder={placeholder}
        name={name}
        type={type}
        icon={Lefticon} {...field} />}
      />
    </InputContain>
  );
};

export { Input };
