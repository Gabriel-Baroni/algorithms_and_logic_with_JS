import "./ItemLista.css"

const ItemLista = (props) =>{
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.titulo}</td>
            <td>{props.autor}</td>
            <td>{props.ano}</td>
            <td>{props.preco}</td>
            <td className="text-center">
            {props.foto ? (
                    <img 
                        src={props.foto} 
                        alt="Capa" 
                        width="75" 
                        onError={(e) => { 
                            <span>Sem Foto</span>
                        }}
                    />
                ) : (
                    <span>Sem Foto</span>
                )}
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={props.excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" onClick={props.alterarClick} title="Alterar">&#36;</i>
            </td>
        </tr>
    )
}
export default ItemLista