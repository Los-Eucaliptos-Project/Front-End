import api from "./api-service";

const LoginUser = async (username, password) => {
  try {
    const response = await api.get(`/users?username=${username}&password=${password}`);
    const users = response.data;

    if (users && users.length > 0) {
      return users[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export default LoginUser;