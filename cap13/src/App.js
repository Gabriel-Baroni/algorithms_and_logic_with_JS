import {Routes, Route} from "react-router-dom"
import MenuSuperior from "./components/MenuSuperior";
import InclusaoLivros from "./components/InclusaoLivros";
import ManutencaoLivros from "./components/ManutencaoLivros";
import ResumoLivro from "./components/ResumoLivros";
const App = () =>{
    return (
        <>
        <MenuSuperior />
        <Routes>
            <Route path="/" element={<InclusaoLivros />} />
            <Route path="manut" element={<ManutencaoLivros />} />
            <Route path="resumo" element={<ResumoLivro />} />

        </Routes>
        </>
    )
}

export default App; 