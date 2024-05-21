import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Motorbikes from './components/Motorbikes';
import MyMessage from './components/MyMessage';
import Counter from './components/Counter';
import RenderCounter from './components/RenderCounter';
import DragAndDrop from './components/DragAndDrop';
import Items from './components/Items';

function App() {
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Mr.X',
      num_comment: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Mr.Y',
      num_comment: 2,
      points: 5,
      objectID: 1
    }
  ]
  // const [searchTerm , setSearchTerm] = useState('')
  const handleChange  = (e) => {
    setSearchTerm(e.target.value)
  }

  const [searchTerm , setSearchTerm ] = useState(
    localStorage.getItem('search') || 'React'
  )

  useEffect( () => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  } 

  const searchedStories = stories.filter(story => 
     story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  // console.log(searchedStories)

  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addItem = () => {
    setItems((t) => [...t , 'next item'])
  } 
  
  const longCalculation = (num) => {
    console.log('hitunggg')
    for (let i = 0; i  < 100000000; i++) {
      num += 1
    }
    return num
  }

  const calculation = useMemo(() => longCalculation(count), ([count]))
  
  return (
    <div>
      <>
        <Items items={items} addItems={addItem} />
        <hr />
        <div>
          Count: {count} <br />
          <button onClick={increment}>+</button>
          <h1>Long Calculation</h1>
          <p>{calculation}</p>
        </div>
      </>
      <hr />
      <DragAndDrop/>
      <RenderCounter/>
      <Counter/>
      <div id="useEffectwithlocalstorage"> 
        {/* <button type="button" onClick={stories.filter(story => story)}> tes</button> */}
        <Search search={searchTerm} onSearch={handleSearch} />

        <List list={searchedStories} />
      </div>
      <MyMessage/>
      <Motorbikes/>
      <h1>My Search Term {searchTerm }</h1>
      <label htmlFor="forSearch">Search: </label>
      <input type="text" name="" id="search" onClick={handleChange}/>

      <p>Searching fo {searchTerm}</p>

      <hr />

      <List list={stories} />
    </div>
      
  );
}

// List maps awal
// const List = (props) => {
//   return props.list.map(item =>

//     <ul style={{display: 'flex' }} key={item.objectID}>
//       <li>{item.title}</li>
//       <li style={{listStyleType: 'none'}}>{item.author}</li>
//       <li style={{listStyleType: 'none'}}>{item.num_comment}</li>
//       <li style={{listStyleType: 'none'}}>{item.points}</li>
//     </ul> )
// }

const List = ({list}) => 
  list.map(item => <Item key={item.objectID} item={item} />)


const Item = ({item}) => (
  <div>
  <span>
    <a href="/">{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comment}</span>
  <span>{item.points}</span>
</div>
)
 

const Search = ( {search, onSearch} )  => (
  <div> 
      <label htmlFor="">Search :</label>
      <input type="text" name="" id="" value={search} onChange={onSearch}  />
  </div>
)

export default App;
