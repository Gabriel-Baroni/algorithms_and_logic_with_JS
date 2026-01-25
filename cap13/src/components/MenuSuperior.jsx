import {Link} from "react-router-dom"
const MenuSuperior = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">Controle Pessoal de Livros</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand">Inclusão</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manut" className="navbar-brand">Manutenção</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resumo" className="navbar-brand">Resumo dos Livros</Link>
                    </li>
                    
                </ul>

            </div>
        </nav>
    )
}

export default MenuSuperior;