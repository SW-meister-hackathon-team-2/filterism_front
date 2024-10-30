// hooks/useFetchTemplate.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as gvar from "../GlobalVariables/global_variables"

const useFetchTemplate = (templateId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!templateId) return;

    const fetchTemplate = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${gvar.SERVER_URL}/api/template/${templateId}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [templateId]);

  return { data, loading, error };
};

export default useFetchTemplate;