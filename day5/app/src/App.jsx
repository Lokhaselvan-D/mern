import Login from './components/Login.jsx';
import Heading from './components/style/Heading.jsx';


function App(){
  let login = true;
  let result =login?<Login/>:<Heading/>
  return (
    result
  )
}
export default App;