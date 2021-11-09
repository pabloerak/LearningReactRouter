import { Routes, Route, Link, useRouteMatch, NavLink } from 'react-router-dom'

//path sirve para los componentes de route
//url sirve para los componentes de Link

const Proyecto = () => {
    const match = useRouteMatch() //hook mas completo
    const { proyecto_id } = match.params
    return (
        <h2>Proyecto {proyecto_id}</h2>
    )
}
const Portafolio = () => {
    const match = useRouteMatch()
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <NavLink activeClassName="activado" exact to={`${match.url}/proyecto-1`}>Proyecto 1</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ fontSize: 20 }} exact to={`${match.url}/proyecto-2`}>Proyecto 2</NavLink>
                </li>
            </ul>
            <div>
                <Routes>
                    <Route path={`${match.path}/:proyecto_id`} element={<Proyecto />} />
                </Routes>
            </div>
        </div>
    )
}
//primero hay que poner las rutas especificas y la raiz la ultima ("/")
function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink isActive={(match, location) => { return true }} exact to="/portafolio">Portafolio</NavLink>
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
