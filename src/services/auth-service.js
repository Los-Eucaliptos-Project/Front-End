const LoginUser = async (email, password, navigate) => {
  try {
    const response = await fetch("https://fresh-platypus-tightly.ngrok-free.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error desconocido");
    }

    console.log("Login exitoso:", data);
    localStorage.setItem("token", data.token);

    navigate("/dashboard"); // Redirige tras un login exitoso
    return data; // Retorna los datos del usuario

  } catch (err) {
    console.error("Error de inicio de sesión:", err.message);
    throw err; // Lanza el error para que sea capturado en `Login`
  }
};

export default LoginUser;
