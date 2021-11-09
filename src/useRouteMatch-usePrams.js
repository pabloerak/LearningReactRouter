import { Routes, Route, Link, useRouteMatch, useParams } from 'react-router-dom'

//path sirve para los componentes de route
//url sirve para los componentes de Link

const Proyecto = () => {
    const match = useRouteMatch() //hook mas completo
    const params = useParams() //hook mas simple
    console.log({ match, params })
    const { proyecto_id } = match.params
    return (
        <h2>Proyecto {proyecto_id}</h2>
    )
}
const Portafolio = () => {
    const match = useRouteMatch()
    console.log({ match })
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/proyecto-1`}>Proyecto 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/proyecto-2`}>Proyecto 2</Link>
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
