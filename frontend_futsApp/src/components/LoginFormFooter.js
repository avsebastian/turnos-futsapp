import { Link } from "react-router-dom"

export function LoginFormFooter() {
  return (
    <div >
      <p>
        ¿No tienes una cuenta?<Link to="/register">¡Regístrate Aquí!</Link>
      </p>
    </div>
  );
}
