import { Routes, Route, Link, Redirect } from 'react-router-dom'

const Portafolio = () => {
  const loggedIn = false
  //si metemos la propiedad push antes de to="..." no se eliminara Portafolio del historial
  //si no se mete push, en el historial solo aparecerá la redireccion directamente
  //Tambien podemos hacer <Redirect exact from="/" to="inicio" />
  if(!loggedIn) {
    return <Redirect to="/" />
  }
  return(
    <h1>Portafolio</h1>
  )
}
//primero hay que poner las rutas especificas y la raiz la ultima ("/")
function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/portafolio">Portafolio</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route exact path="/" element={<h1>Home</h1>} />
                    <Route path="/portafolio" element={<Portafolio></Portafolio>} />
                </Routes>
            </section>
        </div>
    );
}

export default App;