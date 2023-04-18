import Buscador from "./components/Buscador"
import React, {Component} from "react"
import Resultado from "./components/Resultado"

class App extends Component { 

state = {
  termino: "",
  imagenes: []
}

consultarApi = () => {

  const url = `https://pixabay.com/api/?key=35453107-2730d6f69afb2f8a60aa39e9a&q=${this.state.termino}`
  
  fetch(url)
  .then(respuesta => respuesta.json())
  .then(resultado => this.setState({imagenes: resultado.hits}))
}

 datosBusqueda = (termino) => {
this.setState({
  termino
}, () => {
  this.consultarApi()
})
}

  render() { 
  return (
    <div className="app container">
    <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
    </div>
  
    <Buscador
    datosBusqueda={this.datosBusqueda}
    />  
    <Resultado
    imagenes={this.state.imagenes}
    />
    </div>
   
  );
}
}
export default App;
