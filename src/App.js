import './App.css';
import Profile from './components/Profile';
import { menuData } from './data';
import React, {useEffect, useState} from 'react'
function App() {
const [state, setState] = useState([])
const [parent, setParent] = useState([])
const [index, setIndex] = useState()

const submenus = (parent_id) => {
  const filteredSubMenu = menuData.filter((v) => v.parent_id !== null)
  setState(filteredSubMenu)
}
console.log(state)
console.log(index)

useEffect(() => {
  const parentMenu = menuData.filter((v) => v.parent_id == null)
  setParent(parentMenu)
  submenus(6)

}, [index]) 

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        {
          parent.map((v,i) => {
            // submenus(v.id)
            return (
              <div>
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" onClick={() => setIndex(i+1)} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {v.name}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {
                state.map((x,i) => {
                  return (
                    v.id == x.parent_id ? (
                      <li><a onClick={() => setIndex(x.id)} class="dropdown-item" href="#">{x.name}</a></li>
                    ) : null

                  )
                })
                  
                
            }
          </ul>
        </li>
              </div>
            )
          })
        }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
