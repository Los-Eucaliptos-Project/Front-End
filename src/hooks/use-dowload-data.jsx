import { useState } from 'react';
import axios from 'axios';

function UseDownloadData(apiUrl, fileName) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiUrl, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    downloadData,
  };
}

export default UseDownloadData;