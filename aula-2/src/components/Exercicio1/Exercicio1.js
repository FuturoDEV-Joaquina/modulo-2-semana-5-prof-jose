const Exercicio1 = () => {

  const listaDeCompras = ['uva', 'ovo'];

  return(
    <ul>
      {listaDeCompras.map(item => {
        return <li>{item}</li>
      })}
    </ul>
  )

}

export default Exercicio1;