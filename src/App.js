import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom"
import Cards from "./components/Cards/Cards"
import {useState, useEffect} from "react"
import Prev from "./components/Prev/Prev";


function App() {
  
  const [characters, setCharacters] = useState([])
  const [searchCharacters, setSearchCharacters] = useState([])

  
  useEffect(()=> fetch("https://hp-api.herokuapp.com/api/characters")
  .then(r => r.json())
  .then((recurso) => {
      setCharacters(recurso)
  })
, [])

 function searchByName (name) {
  fetch("https://hp-api.herokuapp.com/api/characters")
  .then(r => r.json())
  .then((recurso) => {
      setSearchCharacters(recurso.filter(el => el.name.toUpperCase().includes(name.toUpperCase())))
      
  })
 }
 



  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Prev/>
      </Route>
      <Route path="/home"  render={(props) =><Nav searchByName={searchByName} history={props.history}/>}/>
      <Route exact path="/home" >
        <Cards characters={characters}/>
      </Route>

      <Route exact path="/home/search" >
            <Cards characters={searchCharacters}/>
      </Route>
    
      
      
      </BrowserRouter>
    </div>
     )
}

export default App;
