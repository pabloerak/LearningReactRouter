import { Routes, Route, Link, useHistory } from 'react-router-dom'


//primero hay que poner las rutas especificas y la raiz la ultima ("/")
function App() {
  const history = useHistory()
  console.log({history})
  const forward = () => {
    history.goForward()
  }
  const back = () => {
    history.goBack()
  }
  const push = (url) => {
    history.push(url)
  }
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
              <button onClick={back}>Back</button>
              <button onClick={forward}>Forward</button>
              <button onClick={() => push('/chanchitofeliz')}>Push</button>
                <Routes>
                    <Route exact path="/" element={<h1>Home</h1>} />
                    <Route exact path="/perfil" element={<h1>Perfil</h1>} />
                </Routes>
            </section>
        </div>
    );
}

export default App;