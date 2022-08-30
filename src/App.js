import Formulario from "./components/Formulario";
import ButtonIngreso from "./components/Button";
import {useState} from 'react'

function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Formulario
        setNombre={setNombre}
        setPassword={setPassword}
        nombre={nombre}
      />
      {password === "252525" ? <ButtonIngreso /> : null}
      
    </>
  );
}
export default App;
