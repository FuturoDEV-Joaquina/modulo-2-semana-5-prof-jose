import './Picture.css'
import Cat from '../../assets/cat.gif'

const Picture = () => {
  return (
    <div>
      <img src='dog.gif' alt='dog' className='dog'/>
      <img src={Cat} alt='cat' />
    </div>
  )
}

export default Picture; 