import React, { useEffect, useRef, useState } from 'react'

const RenderCounter = () => {
    const [message ,setMessage] = useState('Hi there, how  are you?')
    const counter = useRef(0)

    useEffect(() => {
        counter.current = counter.current + 1
        console.log('call useEffect',  counter.current)

        setTimeout(() => {
            setMessage('Im Fine, thankyou for asking')
        }, 2000)
    })
  return (
    <div>
        <h1>{message}</h1>
        <h1>The components has been rendered {counter.current} times</h1>
    </div>
  )
}

export default RenderCounter