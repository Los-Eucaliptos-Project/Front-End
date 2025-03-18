import React, { useState } from "react";
import FormLogo from "../components/form-logo.component";
import FormInputFile from "../components/form-input-file.component";
import SubmitButton from "../components/submit-button.component";
import FormLink from "../components/form-link.component";
import { useNavigate } from "react-router-dom";
import LoginUser from "../services/auth-service";

function Login() {
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
    <div
      className="login-page"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="login-form"
        style={{
          backgroundColor: "white",
          padding: "60px",
          paddingRight: "100px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <FormLogo width="360" height="140" marginLeft="30px" />

        <h3
          style={{
            textAlign: "left",
            color: "black",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          className="text-xl font-bold mb-6"
        >
          Ingrese sus credenciales para entrar
        </h3>

        <form onSubmit={handleSubmit}>
          <FormInputFile
            type="email"
            placeholder="Escriba su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Correo
          </FormInputFile>

          <div className="flex items-center justify-between">
            <FormInputFile
              type="password"
              placeholder="Escriba su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon="fa-eye"
            >
              Contraseña
            </FormInputFile>
            <FormLink
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 underline hover:underline active:text-gray-500"
            >
              ¿Olvidaste tu contraseña?
            </FormLink>
          </div>

          <SubmitButton type="submit" margin="30px">
            Iniciar sesión
          </SubmitButton>
        </form>

        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </div>
    </div>
  );
}

export default Login;
