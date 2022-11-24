import axios from "axios";
import { useRef } from "react";

function App() {

  const nombreRef = useRef("");
  const apellidosRef = useRef("");
  const usuarioRef = useRef("");
  const emailRef = useRef("");

  const onsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/users", {
      name: `${nombreRef.current.value} ${apellidosRef.current.value}`,
      username: usuarioRef.current.value,
      email: emailRef.current.value
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    const { id, name, username } = res.data;

    // Respuesta con nuevo usuario...
    const newEmployeeUser = { id, name, username };
    console.log(newEmployeeUser);
  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" name="nombre" ref={nombreRef} placeholder="Nombre" />
        <input type="text" name="apellidos" ref={apellidosRef} placeholder="Apellidos" />
        <input type="text" name="nombreUsuario" ref={usuarioRef} placeholder="Nombre de usuario" />
        <input type="text" name="correo" ref={emailRef} placeholder="Correo electrónico" />
        <input type="submit" value="Insertar" />
      </form>
    </div>
  );
}

export default App;
