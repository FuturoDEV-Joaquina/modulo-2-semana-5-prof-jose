import TemplateExpressions from "./components/TemplateExpressions/TemplateExpressions";
import Picture from "./components/Picture/Picture";
import UserInfo from "./components/UserInfo/UserInfo";

function App() {

  const user = {
    nome:'José',
    email:'jose@email.com',
    idade:25,
    cor:"azul",
    animal:"gato"
  }

  return (
    <div>
      <TemplateExpressions />
      <Picture />
      <UserInfo user={user}/>
    </div>
  )
}

export default App;
