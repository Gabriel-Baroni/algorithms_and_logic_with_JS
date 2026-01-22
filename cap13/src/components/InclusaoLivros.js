const InclusaoLivros = () =>{
    return (
        <div className="container">
            <h4 className="fst-italic mt-3"> Inclusão</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" className="form-control" id="autor" required autoFocus></input>
                </div>
                 <div className="form-group">
                    <label htmlFor="foto">URL da Foto:</label>
                    <input type="text" className="form-control" id="foto" required></input>
                </div>
                <div className=" row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de publicação:</label>
                            <input type="text" className="form-control" id="ano" required></input>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="preco">Preço R$:</label>
                            <input type="text" className="form-control" id="preco" step="0.01" required></input>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar"></input>
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"></input>
            </form>
            <div className="alert"></div>
        </div>
    
    )
}

export default InclusaoLivros