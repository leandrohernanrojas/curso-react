
import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/navBar/navbar'

function App() {
  return (
    <>
    <NavBar marca="Maradiana"
    logo="../img/logo-md.png"
    />
<ItemListConteiner
label="aca van los productos"
/>
    </>
  )
}

export default App