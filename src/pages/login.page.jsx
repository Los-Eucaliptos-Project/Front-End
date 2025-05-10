import React from "react";
import LogoImage from "../components/logo-image.component";
import AuthForm from "../auth/login-components/auth-form";
import styles from "../modules/auth.module.css";

function Login() {
  return (
    <div className={`login-page ${styles.loginPage}`}>
      <div className={`login-form ${styles.loginForm}`}>
        <LogoImage width="360" height="140" marginLeft="30px" />
        <h3 className={`text-xl font-bold mb-6 ${styles.title}`}>
          Ingrese sus credenciales para entrar
        </h3>
        <AuthForm />
      </div>
    </div>
  );
}

export default Login;
