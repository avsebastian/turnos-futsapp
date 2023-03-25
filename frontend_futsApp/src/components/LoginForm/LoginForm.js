import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/users";
import { LoginButton } from "../LoginButton";
import "./LoginForm.css";

export function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  async function onFormSubmit(event) {
    event.preventDefault();

    try {
      await loginUser({ email, password });
      
      navigate("/");
    } catch (error) {
      console.log("hubo un error", error);
    }
  }

  return (
    <form className="LoginForm" onSubmit={onFormSubmit}>
      <label>Email</label>
      <input type="email" name="email" onChange={onEmailChange} />
      <label>Contraseña</label>
      <input type="password" name="password" onChange={onPasswordChange} />
      <div className="LoginFormBottom">
        <div className="RememberContainer">
          <input type="checkbox" name="remember" />
          <label>Recordarme</label>
        </div>
        <a href="/#">¿Has olvidado tu contraseña?</a>
      </div>
      <LoginButton />
    </form>
  );
}
