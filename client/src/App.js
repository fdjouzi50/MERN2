import './App.css';
import { useState, useEffect } from "react"; 
import Axios from "axios";


function App() {
  const [listOfComptes, setListOfComptes] = useState([]);
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const [listOfEtudiants, setListOfEtudiants] = useState([]);
  const [matricule, setMatricule] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [compte_id, setCompte_id] = useState("")
  const [spécialité, setSpécialité] = useState("")

  const [searchTerm, setSearchTerm] = useState("");

  

  useEffect(() => {
    Axios.get("http://localhost:3001/getCompte").then((response) => {
      setListOfComptes(response.data);
    })
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getEtudiant").then((response) => {
      setListOfEtudiants(response.data);
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

  const DeleteCompte = () => {                                                    
    Axios.post("http://localhost:3001/CreateCompte").then((response) => {
      alert("COMPTE DELETED")
    });
  };

  const CreateEtudiant = () => {                                 
    Axios.post("http://localhost:3001/CreateEtudiant", {
      matricule,
      nom,
      prenom,
      compte_id,
      spécialité
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
      <div>
        <input type="text" placeholder="Login..." onChange={(event) => {setLogin(event.target.value);}}/>
        <input type="text" placeholder="Password..."onChange={(event) => {setPassword(event.target.value);}}/>
        <button onClick= {CreateCompte}>Create Compte</button>
        <input type="text" placeholder="Login..." onChange={(event) => {setLogin(event.target.value);}}/>
        <input type="text" placeholder="Password..."onChange={(event) => {setPassword(event.target.value);}}/>
        <button onClick= {DeleteCompte}>Delete Compte</button>
      </div>
      <div className="SearchCompte">                                                                               
      <input type="text" placeholder="Search..."onChange={(event) => {setSearchTerm(event.target.value);}}/>
      {listOfComptes.filter((val)=> {
        if (val.login.toLocaleLowerCase().includes(searchTerm.toLowerCase())) {

        }
      }).map((val, key) => {
        return (
          <div className="val" key={key}>
          <h1>{val.login}</h1>
          </div>
        );
      })}
      </div>
      <div className="EtudiantDisplay">
        {listOfEtudiants.map((user) => {
          return (
            <div>
              <h1>Matricule: {user.matricule}</h1>
              <h1>Nom: {user.nom}</h1>
              <h1>Prenom: {user.prenom}</h1>
              <h1>Compte_id: {user.compte_id}</h1>
              <h1>Spécialité_id: {user.spécialité}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input type="number" placeholder="Matricule..." onChange={(event) => {setMatricule(event.target.value);}}/>
        <input type="text" placeholder="Nom..."onChange={(event) => {setNom(event.target.value);}}/>
        <input type="text" placeholder="Prenom..."onChange={(event) => {setPrenom(event.target.value);}}/>
        <input type="text" placeholder="Compte_id..."onChange={(event) => {setCompte_id(event.target.value);}}/>
        <input type="text" placeholder="spécialité_id..."onChange={(event) => {setSpécialité(event.target.value);}}/>
        <button onClick= {CreateEtudiant}>Create Compte</button>
      </div>
    </div>
  );
}

export default App;
