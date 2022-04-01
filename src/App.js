import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom"
import Cards from "./components/Cards/Cards"
import {useState, useEffect} from "react"
import Prev from "./components/Prev/Prev";


function App() {
  
  const [actualCharacters, setActualCharacters] = useState([])
  const [characters, setCharacters] = useState([])

  
  useEffect(()=> fetch("https://hp-api.herokuapp.com/api/characters")
  .then(r => r.json())
  .then((recurso) => {
      setCharacters(recurso)
      setActualCharacters(recurso)
  })
, [])

 function searchByName (name) {
   
   if(name === ''){
     setActualCharacters(characters)
     return
   }
      setActualCharacters(characters.filter(el => el.name.toUpperCase().includes(name.toUpperCase())))
      
  
 }
 



  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Prev/>
      </Route>
      <Route path="/home"  render={(props) =><Nav searchByName={searchByName} history={props.history}/>}/>
      <Route exact path="/home" >
        <Cards characters={actualCharacters}/>
      </Route>

      
    
      
      
      </BrowserRouter>
    </div>
     )
}

export default App;
