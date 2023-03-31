import Gato from '../../assets/cat1.gif'
import OutroGato from '../../assets/cat2.gif'
import './Animal.css'

const Animal = props => {
  const {especie, comida} = props.info;

  const mostrar = true;
  
  return(
    <>
      {mostrar?
        <div>
          <p>Sou um {especie}!</p>
          <p>Como {comida.map(item => <span>{item} </span>)}</p>
          <img src={Gato} alt='cat' className='cat'/>
          <img src={OutroGato} alt='cat' className='cat'/>
        </div>
      :
        <p>Nada</p>
      }
    </>
  )

}

export default Animal;