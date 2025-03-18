import api from './api-service';

const GetRequirements = async () => {
  try {
    const response = await api.get('/requirements');
    return response.data;
  } catch (error) {
    console.error('Error al obtener requerimientos:', error);
    throw error;
  }
};

export default GetRequirements;