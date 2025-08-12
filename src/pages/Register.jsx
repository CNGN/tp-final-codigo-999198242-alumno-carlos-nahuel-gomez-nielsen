import { useState } from "react"
import { Layout } from "../components/Layout"

//
import { useAuth } from "../context/UserContext"

//
import { useNavigate } from "react-router-dom"

//import { resolve } from "path"

const Register = () => {
  //const [id, setId] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  //
  const { register } = useAuth()

  //
  const nagivate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()




    // limpieza
    setError("")
    setSuccess("")




    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    //
    const correovalido = email.includes("@")
    if (!correovalido) {
      //setError("Debe poner un formato de correo valido")
      console.log("Debe poner un formato de correo valido")
      return
    } else {
      console.log("Formato de correo valido")
    }

    if (password.length <= 3) {
      setError("Debe poner una contraseña con más larga")
      return

    }

    // el envio de datos y la rediccion a la pagina Home,
    // lo dejo debajo de la condicion if.
    // Que verifica si los campos de entrada estan vacios o no.

    // envio de datos a funcion register en UserContext.jsx
    register(username, email, password)

    // redirigo a la pagina home
    nagivate("/")



    const newUser = {
      username,
      email,
      password
    }


    console.log(newUser)
    setSuccess("Usuario registrado con éxito")

    setUsername("")
    setEmail("")
    setPassword("")


  }

  return (
    <Layout>
      <section className="register-section">
        <h1 className="register">Registracion de Usuario</h1>
        <h2 className="register">Hola, aqui te registras por primera vez</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register">
            <p className="register-p-nombredeusuario">Username:</p>
            <label className="register"></label>
            <input
              className="register"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="register">
            <p className="register-p-correo">Correo electrónico:</p>
            <label className="register" ></label>
            <input
              className="register"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="register">
            <p className="register-p-contraseña">Contraseña:</p>
            <label className="register"></label>
            <input
              className="register"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="register" >Ingresar</button>
        </form>

        {
          error && <p className="resgister-error">{error}</p>
        }
        {
          success && <p className="resgister-success">{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Register }