import React from 'react'

const DragAndDrop = () => {
    const  allowDrop = (e) => {
        e.preventDefault()
    }
    const drag = (e) => {
        e.dataTransfer.setData('text', e.target.id)
    }

    const drop = (e) => {
        e.preventDefault()
        let data = e.dataTransfer.getData('text')
        e.target.appendChild(document.getElementById(data))
    }
  return (
    <div>
        <h2>Drag and Drop</h2>

        <div style={{gridTemplateColumns: 'repeat(5, 1fr)'}} className=' grid gap-3 border   '>
            <div id='box1' className="box p-10 bg-blue-500 " ondrop={() => drop()} ondragover={() => allowDrop()}>
                <img id='item1' src="https://loremflickr.com/640/480/city" alt="" draggable="true" ondragstart={() => drag()} />
            </div>
            <div id='box2' className="box p-10 bg-blue-700 " ondrop={() => drop()} onDragOver={() => allowDrop()}>

            </div>
        </div>
    </div>
  )
}

export default DragAndDrop