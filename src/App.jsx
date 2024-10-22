import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/navBar/navbar'
import ItemDetailConteiner from './components/ItemListConteiner/itemDetailConteiner'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (

   <BrowserRouter>
  <NavBar/>
<Routes>
  <Route path="/" element={<ItemListConteiner />} />
  <Route path="/category/:id" element={<ItemListConteiner />} />
  <Route path="/item/:id" element={<ItemDetailConteiner />} />
</Routes>
</BrowserRouter>
  
)
}

export default App
