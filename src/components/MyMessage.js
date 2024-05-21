import React, { useEffect, useState } from 'react'

const MyMessage = () => {
    const [message, setMessage] = useState('Hi there, how are you')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('trigger use effect hook')
        setCounter((counter) => counter + 1)

        setTimeout(() => {
            setMessage('Im fine, thanks for asking')
        }, 1000)
    }, [])


 return (
    <div>
        <h1>{counter} {message}</h1>
    </div>
  )
}

export default MyMessage