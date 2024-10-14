import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //useEffect (O que fazer, Quando Fazer)
  useEffect(()=>{
    //console.log("Mateus Do Prado")
    fetch("https://one022b-marketplace-fork-back-end.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>console.log(dados))
  },[])
  return (
    <>
     
    </>
  )
}

export default App
