const UserInfo = props => {
  const {nome, email, idade, animal, cor} = props.user

  return(
    <ul>
      <li>Nome: {nome}</li>
      <li>Email: {email}</li>
      <li>Idade: {idade}</li>
      <li>Animal: {animal}</li>
      <li>Cor: {cor}</li>
    </ul>
  )

}

export default UserInfo;