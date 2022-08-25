import './App.css';
import { useState, useEffect } from "react"; 
import Axios from "axios";

function App() {
  const {listOfComptes, setListOfComptes} = useState([]);
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getComptes").then((response) => {
      setListOfComptes(response.data);
    })
  }, []);

  const CreateCompte = () => {
    Axios.post("http://localhost:3001/CreateCompte", {
      login,
      password,
    }).then((response) => {
      alert("COMPTE CREATED")
    });
  };


  return (
    <div className="App">
      <div className="CompteDisplay">
        {listOfComptes.map((user) => {
          return (
            <div>
              <h1>Login: {user.login}</h1>
              <h1>Password: {user.password}</h1>
            </div>
          );
        })}
      </div>
      <dive>
        <input type="text" placeholder="Login..." onChange={(event) => {setLogin(event.target.value);}}/>
        <input type="text" placeholder="Password..."onChange={(event) => {setPassword(event.target.value);}}/>
        <button onClick= {CreateCompte}>Create Compte</button>
      </dive>
    </div>
  );
}

export default App;
