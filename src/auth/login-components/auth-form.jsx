import React, { useState } from "react";
import FormInputFile from "../components/form-input-file.component";
import ButtonSubmit from '../../components/buttons/button-submit.btn';
import FormLink from "../components/form-link.component";
import { useNavigate } from "react-router-dom";
import LoginUser from "../../services/auth-service";
import styles from "../../modules/auth.module.css";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError(null);

    try {
      await LoginUser(email, password, navigate);
    } catch (error) {
      setLoginError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputFile
        type="email"
        placeholder="Escriba su correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        Correo
      </FormInputFile>

      <FormInputFile
        type="password"
        placeholder="Escriba su contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon="fa-eye"
      >
        Contraseña
      </FormInputFile>

      <div className={styles.linkContainer}>
        <FormLink
          href="#"
          className="text-sm text-gray-500 hover:text-gray-700 underline hover:underline active:text-gray-500"
        >
          ¿Olvidaste tu contraseña?
        </FormLink>
      </div>

      <ButtonSubmit type="submit" margin="30px">
        Iniciar sesión
      </ButtonSubmit>

      {loginError && <p className={styles.errorText}>{loginError}</p>}
    </form>
  );
}

export default AuthForm;
