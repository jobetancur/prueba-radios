import { useState } from "react";
import "./App.css";

function App() {

  const [view, setView] = useState(false);
  const [radioPruebaValue, setRadioPruebaValue] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [radioDatesValue, setRadioDatesValue] = useState({
    address: false,
    phone: false,
    city: false,
  });

  const handleChanges = (event) => {
    console.log(event.target.value);
    if(event.target.value === "Name") {
      setRadioPruebaValue({
        name: true,
        email: false,
        password: false,
      });
    } else if(event.target.value === "Email") {
      setRadioPruebaValue({
        name: false,
        email: true,
        password: false,
      });
    } else if(event.target.value === "Password") {
      setRadioPruebaValue({
        name: false,
        email: false,
        password: true,
      });
    }

    if(event.target.value === "Address") {
      setRadioDatesValue({
        address: true,
        phone: false,
        city: false,
      });
    } else if(event.target.value === "Phone") {
      setRadioDatesValue({
        address: false,
        phone: true,
        city: false,
      });
    } else if(event.target.value === "City") {
      setRadioDatesValue({
        address: false,
        phone: false,
        city: true,
      });
    } 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      {
        view 
          ? (
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="name">
                <input 
                  id={"name"} 
                  value="Name" 
                  type="radio" 
                  name="prueba" 
                  checked={ radioPruebaValue.name }
                  onChange={handleChanges}
                />
                Name
              </label>
              <label htmlFor="email">
                <input 
                  id="email" 
                  value={"Email"}
                  type="radio" 
                  name="prueba" 
                  checked={ radioPruebaValue.email }
                  onChange={handleChanges}
                />
                Email
              </label>
              <label htmlFor="password">
                <input 
                  id="password" 
                  value={"Password"}
                  type="radio" 
                  name="prueba" 
                  checked={ radioPruebaValue.password }
                  onChange={handleChanges}
                />
                Password
              </label>
            </div>
            <div>
              <label htmlFor="dates">
                <input 
                  id={"address"} 
                  value={"Address"} 
                  type="radio" 
                  name="dates" 
                  checked={ radioDatesValue.address }
                  onChange={handleChanges}
                />
                Address
              </label>
              <label htmlFor="email">
                <input 
                  id="phone" 
                  value={"Phone"}
                  type="radio" 
                  name="dates" 
                  checked={ radioDatesValue.phone }
                  onChange={handleChanges}
                />
                Phone
              </label>
              <label htmlFor="password">
                <input 
                  id="city" 
                  value={"City"}
                  type="radio" 
                  name="dates" 
                  checked={ radioDatesValue.city }
                  onChange={handleChanges}
                />
                City
              </label>
            </div>
          </form>
          ) : (
            <h1>Formulario</h1>
        )
      }
          <div>
            <button onClick={() => setView(true)}>Mostrar</button>
            <button onClick={() => setView(false)}>Ocultar</button>
          </div>
    </>
  );
}

export default App;
