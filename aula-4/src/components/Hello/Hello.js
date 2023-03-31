import PropTypes from 'prop-types'

const Hello = ({name, age}) => {

  return <p>Hello, I am called {name}, and I am {age}.</p>

}

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOf([18, 19, 20]),
  email: PropTypes.string.isRequired
}

export default Hello;