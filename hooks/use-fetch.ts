import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint: string, query:any) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "X-RapidAPI-Key": 'fa16cf9049msha69b8bc4b4e3462p1d7538jsn801aa670647b',
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  //   params: { ...query },
  // };

  const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'developer jobs in chicago',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': 'fa16cf9049msha69b8bc4b4e3462p1d7538jsn801aa670647b',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;