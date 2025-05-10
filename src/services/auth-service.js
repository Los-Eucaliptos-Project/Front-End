const LoginUser = async (email, password, navigate, endpoint = "/users") => {
  try {
    const apiUrl = "http://localhost:3001";

    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data || "Credenciales inválidas");
    }

    console.log("Login exitoso:", data);

    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/dashboard");
    return data;

  } catch (err) {
    console.error("Error de inicio de sesión:", err.message);
    throw err;
  }
};

export default LoginUser;
