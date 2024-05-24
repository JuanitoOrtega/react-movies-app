import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useFetchDetails = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
  
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint, {
                params: {
                    language: 'es-MX'
                }
            });
            setLoading(false);
            setData(response.data);
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    }, [endpoint]);
  
    useEffect(() => {
        fetchData();
    }, [fetchData]);
  
    return { data, loading };
};

export default useFetchDetails;