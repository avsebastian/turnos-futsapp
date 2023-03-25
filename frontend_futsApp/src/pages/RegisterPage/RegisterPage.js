import { Hero } from "../../components/Hero";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { FormHeader } from "../../components/FormHeader/FormHeader";
import "./RegisterPage.css";

export function RegisterPage() {
  return (
    <div className="LoginPageContainer">
      <div className="LoginFormContainer">
        <FormHeader subtitle="¡Registrate!" title="Ingresa los datos para crear tu cuenta" />
        <RegisterForm />
      </div>
      <div className="LoginHeroContainer">
        <Hero />
      </div>
    </div>
  );
}
