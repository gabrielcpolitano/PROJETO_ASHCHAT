
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
function App() {

    const name = "Matheus"

    const newName = name.toUpperCase()

    function sum(a, b){
        return a + b
    }
    const url = "https://img.clerk.com/static/apple.svg?width=80"
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Gabriel"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={name}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <Frase/>
      <List/>
    </div>
  );
}

export default App;
