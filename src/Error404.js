import { Routes, Route, Link } from 'react-router-dom'


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
                        <Link to="/perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route exact path="/" element={<h1>Home</h1>} />
                    <Route exact path="/perfil" element={<h1>Perfil</h1>} />
                    <Route exact path="*" element={'404: Ruta no encontrada'} />
                </Routes>
            </section>
        </div>
    );
}

export default App;