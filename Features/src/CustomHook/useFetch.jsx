import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    // In this useEffect we can maintain a mounted variable.
    // Read more here (at the end)
    // https://chatgpt.com/c/69367bec-89c0-8323-b9ed-d5919ecc2948

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                console.log(url)
                setLoading(true);
                setError(false);

                let res = await fetch(url)
                let data = await res.json();
                setData(data)
            }
            catch (e) {
                setError("Error fetching results: ", e)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData(url);
    }, [url]);

    return { loading, error, data };
}

export default useFetch