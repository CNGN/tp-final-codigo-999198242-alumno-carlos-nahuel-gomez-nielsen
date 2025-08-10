import { useState } from "react"
import { Layout } from "../components/Layout"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)



  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    // petición al backend mediante fetch -> método POST https://fakeproductapi.com/products
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")
  }

  return (
    <Layout>
      <section className="dashboard-section">
        <h1>Panel de Administración</h1>
        <h2 className="dashboard-">Cargar nuevo producto</h2>
        <form className="dashboard-form" onSubmit={handleSubmit}>
          <div className="dashboard-" >
            <p className="dashboard-p-producto">Nombre del producto:</p>
            <label className="dashboard-1" ></label>
            <input className="dashboard-" type="text" name="nombre" onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div className="dashboard-">
            <p className="dashboard-p-precio">Precio:</p>
            <label className="dashboard-"></label>
            <input className="dashboard-" type="number" name="precio" onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>

          <div className="dashboard-">
            <p className="dashboard-p-descripcion">Descripción:</p>
            <label className="dashboard-"></label>
            <textarea className="dashboard-" name="descripcion" rows="4" onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>

          {
            error && <p className="dashboard-error">{error}</p>
          }

          <button className="dashboard-" >Guardar producto</button>
        </form>

        {
          product && <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        }
      </section>
    </Layout>
  )
}

export { Dashboard }
