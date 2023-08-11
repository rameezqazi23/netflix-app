import React, { useEffect, useState } from 'react'
import  requests  from "../Request"
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            console.log(response)

        })
    }, [])



    return (
        <div>

        </div>
    )
}

export default Main
