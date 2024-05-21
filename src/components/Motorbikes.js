import React, { useReducer, useState } from 'react'

const Motorbikes = () => {
    const [brand, setBrand] = useState('Honda');
    const [model, setModel] = useState('Vario');
    const [year, setYear] = useState(2007);
    const [color , setColor] = useState('red');

    const [owner, setOwner] = useState({
        name: 'James Bond',
        nik: 1234567,
        address: 'Jl.Tukad Batanghari 55'
    })

    const updateAddress = () => {
        setOwner(prev => {
            return {...prev, address: 'Jl Sunset Road'}
        })
    }

  return (
    <div>
        <h1>My Motorbike is {brand}</h1>
        <p>
            It is a {color} {model} from {year}
        </p>
        <hr />
        <h1>Owner : {brand}</h1>
        <p>Name: {owner.name}</p>
        <p>Nik: {owner.nik}</p>
        <p>Alamar: {owner.address}</p>
        <button className='bg-blue-500 hover:bg-blue-700 px-3 py-3 rounded' onClick={updateAddress}>
            ChangeButton
        </button>
        <hr />
    </div>
  )
}

export default Motorbikes