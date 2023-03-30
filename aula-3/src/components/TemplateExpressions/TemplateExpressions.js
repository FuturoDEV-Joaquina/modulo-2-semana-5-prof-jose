const TemplateExpressions = () => {
  
  const mostrar = false;
  const finalDeSemana = ['Sábado', 'Domingo'];

  return(
    <>
    { mostrar? 
      <ul>
        {finalDeSemana.map(item => <li>{item}</li>)}
      </ul>
      :
      <p>Final de semana escondido</p>
    }
    </>
  )

}

export default TemplateExpressions;