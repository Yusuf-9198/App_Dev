import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Yusuf-9198')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (

        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
            Github Followers: {data.followers}
            <img style={{ border: '2px solid white' }} src={data.avatar_url} alt="Avatar" width={300} />
        </div>
    )
}

export default Github