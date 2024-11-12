import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/navBar/navbar'
import ItemDetailConteiner from './components/itemDetailConteiner/itemDetailConteiner'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import  Carrito  from './components/carrito'

function App() {
  return (

   <BrowserRouter>
  <NavBar/>
<Routes>
  <Route path="/" element={<ItemListConteiner />} />
  <Route path="/categoria/:categorias" element={<ItemListConteiner />} />
  <Route path="/productos/:id" element={<ItemDetailConteiner />} />
  <Route path="/carrito" element= {<Carrito />} /> 
</Routes>
</BrowserRouter>
  
)
}

export default App
