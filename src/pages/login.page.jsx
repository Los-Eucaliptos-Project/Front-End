import React, { useState } from 'react';
import FormLogo from '../components/form-logo.component';
import FormInputFile from "../components/form-input-file.component";
import SubmitButton from "../components/submit-button.component";
import FormLink from '../components/form-link.component';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
  };

  return (
    <div
      className="login-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        padding: '20px', 
        boxSizing: 'border-box',
      }}
    >
      <div
        className="login-form"
        style={{
          backgroundColor: 'white',
          padding: '60px',
          paddingRight: '100px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <FormLogo width="360" height="140" marginLeft="30px" />

        <h3 style={{ textAlign: 'left', color: 'black', marginTop: '50px', marginBottom: '50px'}} className="text-xl font-bold mb-6">
          Ingrese sus credenciales para entrar
        </h3>

        <form onSubmit={handleSubmit}>
          <FormInputFile
            type="text"
            placeholder="Escriba su nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            Nombre de usuario
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
              <FormLink href="#" className="text-sm text-gray-500 hover:text-gray-700 underline hover:underline active:text-gray-500">
                ¿Olvidaste tu contraseña?
              </FormLink>
            </FormInputFile>
          </div>

          <Link to="/dashboard">
          <SubmitButton 
          type="submit"
          marginTop="30px" 
          marginLeft="30px"
          marginRight="30px"
          marginBottom="30px">
            Iniciar sesión
          </SubmitButton>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

