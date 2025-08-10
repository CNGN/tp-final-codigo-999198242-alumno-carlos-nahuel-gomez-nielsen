import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
    }
  }

  return (
    <Layout>
      <section className="login-section">
        <h1 className="login-h1">Inicia sesión</h1>
        <h2 className="login-h2">Hola, bienvenido de nuevo</h2>
        <div className="usuario-maestro">
          <p className="login-p1">johnd</p>
          <p className="login-p2">m38rmF$</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-div-usuario">
            <p>Usuario:</p>
            <label className="login-label-usuario"></label>
            <input
              className="login-input-usuario"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div className="login-div-contraseña">
            <p>Contraseña:</p>
            <label className="login-label-contraseña"></label>
            <input
              className="login-input-contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button className="login-button-ingresar">Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }