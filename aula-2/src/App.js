import './App.css';
import Exercicio1 from './components/Exercicio1/Exercicio1';
import ComponenteA from './components/ComponenteA/ComponenteA';
import ComponenteB from './components/ComponenteB/ComponenteB';

function App() {

  const nome = 'José';
  const array = [1, 2, 3, 4, 5];
  const flag = false;

  return (
    <div id='minhaDiv'>
      <h1 className='meuTitulo'>Aula 2</h1>
      <p>Olá, {nome}!</p>
      {array.map(item => <p>{item}</p>)}
      {flag? <p>FLAG ATIVA</p> : <p>FLAG INATIVA</p>}
      <Exercicio1/>
      <ComponenteA/>
      <ComponenteB/>
    </div>
  );
}

export default App;
