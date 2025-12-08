import React from 'react'
import useFetch from './useFetch'

const Users = () => {
    let url = 'https://dummyjson.com/users/10'

    // This is the useFetch custom hook
    const { loading, error, data } = useFetch(url);

    return (
        <div>
            Testing Custom hooks
            {loading && <div>
                Loading data...
            </div>}
            {error && <div>
                {error}
            </div>}
            {data && <div>
                {JSON.stringify(data)}
            </div>}
        </div>
    )
}

export default Users