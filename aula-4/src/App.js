import Animal from "./components/Animal/Animal";
import Hello from "./components/Hello/Hello";

function App() {

  const animal = {
    especie: 'gato',
    comida: ['atum', 'sache']
  }

  return (
    <>
      <Animal info={animal}/>
      <Hello name='João' age={25} email='1@1.c'/>
    </>
  );
}

export default App;
