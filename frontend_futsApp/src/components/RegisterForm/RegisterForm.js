import { useState } from "react";
import { createUserService } from "../../services/users";
import { useNavigate } from "react-router-dom"
import "./RegisterForm.css";

export function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onLastnameChange(event) {
    setLastname(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onRePasswordChange(event) {
    setRePassword(event.target.value);
  }

  async function onFormSubmit(event) {
    event.preventDefault();

    if (password === rePassword) {

      const user = await createUserService({
        name,
        lastname,
        email,
        password,
        rePassword
      })

      navigate("/login");

      console.log("usuario creado", user);
    } else {
      alert("Las contraseñas no coinciden")
    }
  }

  return (
    <form className="RegisterForm" onSubmit={onFormSubmit}>
      <label>Nombre</label>
      <input name="name" onChange={onNameChange} />
      <label>Apellido</label>
      <input name="lastname" onChange={onLastnameChange} />
      <label>Email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Contraseña</label>
      <input type="password" name="password" onChange={onPasswordChange} />
      <label>Volver a escribir contraseña</label>
      <input type="password" name="rePassword" onChange={onRePasswordChange} />
      <button className="Button" type="submit">Registrar</button>
    </form>
  );
}
