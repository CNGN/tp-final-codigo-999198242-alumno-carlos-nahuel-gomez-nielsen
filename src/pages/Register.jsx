import { useState } from "react"
import { Layout } from "../components/Layout"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

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
          error && <p style={{ color: "red" }}>{error}</p>
        }
        {
          success && <p style={{ color: "green" }}>{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Register }

